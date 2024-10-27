import express from "express";
const router = express.Router();
import { getProducts, getProductsById } from '../controller/productController.js';


// Fetch all products
router.route('/').get(getProducts);
//Fetch a products
router.route('/:id').get(getProductsById);

export default router;
