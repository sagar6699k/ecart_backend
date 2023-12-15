import express from "express";
import { createProduct, getAllProducts } from "../controllers/product.controller.js";

const productRouter = express.Router();

// register users
productRouter.post("/product/add", createProduct)
productRouter.get("/products", getAllProducts)

export { productRouter };