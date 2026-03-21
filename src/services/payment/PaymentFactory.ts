import { PaymentProvider } from './PaymentProvider';
import { PaystackProvider } from './PaystackProvider';
import { MoolreProvider } from './MoolreProvider';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PaymentFactory {
  static async getActiveProvider(): Promise<PaymentProvider> {
    const activeGateway = await prisma.gateway.findFirst({
      where: { is_active: true }
    });

    if (!activeGateway) {
      throw new Error('No active payment gateway configured.');
    }

    const keys = activeGateway.api_keys as any;

    switch (activeGateway.name.toLowerCase()) {
      case 'paystack':
        if (!keys?.secretKey) throw new Error('Paystack secret key missing');
        return new PaystackProvider(keys.secretKey);
      
      case 'moolre':
        if (!keys?.secretKey) throw new Error('Moolre secret key missing');
        return new MoolreProvider(keys.secretKey);
        
      default:
        throw new Error(`Unsupported gateway: ${activeGateway.name}`);
    }
  }

  // Fallback Logic Implementation
  static async getFallbackProvider(primaryName: string): Promise<PaymentProvider | null> {
    const backupGateway = await prisma.gateway.findFirst({
      where: { 
        is_active: false, 
        name: { not: primaryName }
      }
    });

    if (!backupGateway) return null;

    const keys = backupGateway.api_keys as any;
    
    switch (backupGateway.name.toLowerCase()) {
      case 'paystack':
        return new PaystackProvider(keys.secretKey);
      case 'moolre':
        return new MoolreProvider(keys.secretKey);
      default:
        return null;
    }
  }
}
