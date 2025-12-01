// src/routes/bookingRoutes.js
import express from "express";
import {
  createBooking,
  getBookings,
} from "../../controllers/bookingController.js";

const router = express.Router();

router.post("/book", createBooking);
router.get("/", getBookings);

export default router;
