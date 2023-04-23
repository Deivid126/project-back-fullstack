import express from "express";
import CartController  from "../controllers/CartController";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../config/swaggerOptions';

const router = express.Router();

const cart = new CartController;
router.use("/api-docs", swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));
router.get("/cart-history/:id",cart.getcart);

export default router;



