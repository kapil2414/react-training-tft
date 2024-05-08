import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import employeeRoutes from './routes/employee.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Stripe from 'stripe';



dotenv.config();
const stripe = new Stripe(process.env.STRIPE);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use(cookieParser());

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

app.post('/payment', async (req, res) => {
  const product = await stripe.products.create({
    name: req.body.name
  })

  let price;
  let session;
  if (product) {
    price = await stripe.prices.create({
      product: `${product.id}`,
      unit_amount: req.body.price * 100,
      currency: "inr"
    })

  }
  if (price.id) {
    session = await stripe.checkout.sessions.create(
      {
        line_items: [{
          price: `${price.id}`,
          quantity: 1
        }],
        mode: 'payment',
        success_url: `http://locahost:3000/payment/success`,
        cancel_url: `http://locahost:3000/payment/cancel`,
        customer_email: "training@demo.com"
      }
    )
  }

  res.json({
    session
  })


})

app.use('/api/employee', employeeRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
