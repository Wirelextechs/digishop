import { PrismaClient, Order, Product, User, Prisma } from '@prisma/client';
import { Decimal } from 'decimal.js';

type TxClient = Omit<PrismaClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">;

export class EscrowService {
  /**
   * Calculates and applies commission based on strict rules.
   * To be called from within a Prisma Transaction.
   */
  static async processCommission(tx: TxClient, order: Order & { product: Product, affiliate: User | null }) {
    if (!order.affiliate_id) return; // No commission if no affiliate
    
    const price = new Decimal(order.product.base_price.toString());
    const isDigital = order.product.type === 'DIGITAL';
    
    // Validate rules
    // Digital: 40% affiliate, 10% platform, 50% vendor
    // Physical: min 20% affiliate, 5% platform
    let affiliateRate = new Decimal(order.product.commission_rate.toString());
    let platformRate = new Decimal(0);

    if (isDigital) {
      affiliateRate = new Decimal(40);
      platformRate = new Decimal(10);
      if (!affiliateRate.equals(40)) {
        // Enforce 40% for digital
        affiliateRate = new Decimal(40);
      }
    } else {
      platformRate = new Decimal(5);
      if (affiliateRate.lessThan(20)) {
        // Enforce min 20% for physical
        affiliateRate = new Decimal(20);
      }
    }

    const affiliateShare = price.mul(affiliateRate).dividedBy(100);
    const platformShare = price.mul(platformRate).dividedBy(100);
    const vendorShare = price.minus(affiliateShare).minus(platformShare);

    // Update Vendor Balance
    await tx.user.update({
      where: { id: order.product.vendor_id },
      data: {
        total_earned: { increment: vendorShare.toNumber() },
        available_balance: { increment: vendorShare.toNumber() } // Vendor gets paid immediately (assumed, or specify pending if physical)
      }
    });

    // Escrow logic for Affiliate
    if (isDigital) {
      // Released immediately
      await tx.user.update({
        where: { id: order.affiliate_id },
        data: {
          total_earned: { increment: affiliateShare.toNumber() },
          available_balance: { increment: affiliateShare.toNumber() }
        }
      });
    } else {
      // Held in pending for physical
      await tx.user.update({
        where: { id: order.affiliate_id },
        data: {
          total_earned: { increment: affiliateShare.toNumber() },
          pending_balance: { increment: affiliateShare.toNumber() }
        }
      });
    }
  }
}
