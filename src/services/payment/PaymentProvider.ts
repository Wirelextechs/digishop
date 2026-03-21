import { Decimal } from 'decimal.js';

export interface PaymentProvider {
  /**
   * Initialize a new payment transaction with the gateway.
   * @param amount The total amount to charge
   * @param currency The currency string (e.g. GHS)
   * @param email The buyer's email address
   * @param metadata Additional metadata (e.g. orderId)
   * @returns an object with payment URL and a transaction reference
   */
  initializePayment(
    amount: Decimal,
    currency: string,
    email: string,
    metadata: Record<string, any>
  ): Promise<{ authorizationUrl: string; reference: string }>;

  /**
   * Verify a transaction callback/webhook reference
   * @param reference The reference returned by the gateway
   * @returns an object indicating status and amount verified
   */
  verifyTransaction(
    reference: string
  ): Promise<{ status: boolean; amount: Decimal; message?: string }>;
}
