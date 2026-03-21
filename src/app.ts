import express from 'express';
import vendorRoutes from './routes/vendorRoutes';
import webhookRoutes from './routes/webhookRoutes';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());

// Webhooks require raw parsing sometimes for signatures, but we'll use json for both in this basic setup
// Note: In production Paystack/Moolre webhooks might need raw body mapping if verifying hmac
app.use(express.json());

// Routes
app.use('/api/vendor', vendorRoutes);
app.use('/api/webhooks', webhookRoutes);

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
