import express from 'express';
import data from './data.js';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongo db');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
