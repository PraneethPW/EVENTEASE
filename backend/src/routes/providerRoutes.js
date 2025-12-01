// src/routes/providerRoutes.js
import express from "express";
import {
  createProvider,
  getProviders,
  getProviderById,
} from "../../controllers/providerController.js";

const router = express.Router();

router.post("/register", createProvider);
router.get("/", getProviders);
router.get("/:id", getProviderById);

export default router;
