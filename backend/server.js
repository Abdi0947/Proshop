import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Updated to use ES6 import
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT ;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.json(product);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
