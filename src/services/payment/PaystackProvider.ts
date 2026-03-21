import { Decimal } from 'decimal.js';
import { PaymentProvider } from './PaymentProvider';

export class PaystackProvider implements PaymentProvider {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  async initializePayment(amount: Decimal, currency: string, email: string, metadata: Record<string, any>) {
    const amountInLowest = Math.round(amount.mul(100).toNumber());

    const res = await fetch('https://api.paystack.co/transaction/initialize', {
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
    if (!res.ok) throw new Error(data.message || 'Failed to initialize Paystack payment');

    return {
      authorizationUrl: data.data.authorization_url,
      reference: data.data.reference
    };
  }

  async verifyTransaction(reference: string) {
    try {
      const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`
        }
      });
      const data = await res.json() as any;

      const status = data.data?.status === 'success';
      const amountDec = data.data?.amount ? new Decimal(data.data.amount).dividedBy(100) : new Decimal(0);

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
