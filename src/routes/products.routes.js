import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

// Routes
router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProduct);

export default router;
