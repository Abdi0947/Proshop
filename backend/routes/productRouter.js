import express from "express";
const router = express.Router();
import products from "../data/products.js";
import asyncHandler from '../middleware/asyncHandle.js';
import Product from "../models/productModel.js";

// Fetch all products
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}));

// Fetch a single product by ID
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id); 
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
}));

export default router;
