import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { Decimal } from 'decimal.js';
import { EscrowService } from '../services/escrowService';

const router = Router();
const prisma = new PrismaClient();

router.post('/paystack', async (req, res) => {
  const event = req.body.event;
  const reference = req.body.data?.reference;
  
  if (event === 'charge.success') {
    try {
      // Atomic Transaction required by instructions
      await prisma.$transaction(async (tx: any) => {
        const order = await tx.order.findUnique({ 
          where: { transaction_ref: reference },
          include: { product: true }
        });

        if (!order || order.status !== 'PENDING') return; // Idempotency check

        // Update status for Digital or Physical
        const isDigital = order.product.type === 'DIGITAL';
        await tx.order.update({
          where: { id: order.id },
          data: { status: isDigital ? 'COMPLETED' : 'PENDING' }
        });

        // Use the Escrow Service logic (strict 40% / 20% rules)
        await EscrowService.processCommission(tx, order);
      });
      res.sendStatus(200);
    } catch(err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(200);
  }
});

router.post('/moolre', async (req, res) => {
  res.sendStatus(200);
});

export default router;
