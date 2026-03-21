import { Router } from 'express';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';

const router = Router();
const upload = multer({ dest: 'uploads/' }); 
const prisma = new PrismaClient();

router.post('/products', upload.array('images', 5), async (req, res) => {
  try {
    const { vendor_id, type, title, description, base_price, commission_rate, stock } = req.body;
    
    const product = await prisma.product.create({
      data: {
        vendor_id,
        type, 
        title,
        description,
        base_price,
        commission_rate,
        stock: parseInt(stock || '0', 10),
      }
    });

    res.status(201).json({ success: true, product });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
