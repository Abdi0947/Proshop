import asyncHandler from "../middleware/asyncHandle.js";
import Product from "../models/productModel.js";

// Fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Fetch product by ID
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    return res.status(404).json({ message: "Product not found" });
  }
});

export { getProducts, getProductsById };

