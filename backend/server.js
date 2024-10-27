import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import productRoutes from './routes/productRouter.js';

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Set the port (with a fallback value for development)
const port = process.env.PORT ;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Basic API route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Product routes
app.use('/api/products', productRoutes);

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
