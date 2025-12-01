// src/controllers/bookingController.js
import Booking from "../models/Booking.js";

export const createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate("providerId");
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};
