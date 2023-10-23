import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

console.log(Product);

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
  // res.send({ value: 1 });
});

export default seedRouter;
