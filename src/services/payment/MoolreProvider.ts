import { Decimal } from 'decimal.js';
import { PaymentProvider } from './PaymentProvider';

export class MoolreProvider implements PaymentProvider {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  // Moolre uses a hypothetical identical interface to Paystack here for demonstration.
  // We use Fetch strictly in place.
  async initializePayment(amount: Decimal, currency: string, email: string, metadata: Record<string, any>) {
    // Implement Moolre logic - assumes amount in lowest denomination just like standard payment gateways
    const amountInLowest = Math.round(amount.mul(100).toNumber());

    const res = await fetch('https://api.moolre.com/v1/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        amount: amountInLowest,
        currency,
        metadata
      })
    });

    const data = await res.json() as any;
    if (!res.ok) throw new Error(data.message || 'Failed to initialize Moolre payment');

    return {
      authorizationUrl: data.payment_url, // Assuming distinct response structure
      reference: data.reference
    };
  }

  async verifyTransaction(reference: string) {
    try {
      const res = await fetch(`https://api.moolre.com/v1/transaction/verify/${encodeURIComponent(reference)}`, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`
        }
      });
      const data = await res.json() as any;

      const status = data.status === 'successful';
      const amountDec = data.amount ? new Decimal(data.amount).dividedBy(100) : new Decimal(0);

      return {
        status,
        amount: amountDec,
        message: data.message
      };
    } catch (e: any) {
      return { status: false, amount: new Decimal(0), message: e.message };
    }
  }
}
