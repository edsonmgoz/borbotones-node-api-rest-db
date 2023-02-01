import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import productRoutes from "./routes/products.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

export default app;
