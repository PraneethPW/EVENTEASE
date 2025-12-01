// src/models/Provider.js
import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    serviceType: { type: String, required: true }, // e.g. "catering", "decor"
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    description: { type: String },
    location: { type: String },
    phone: { type: String },
  },
  { timestamps: true } // createdAt, updatedAt
);

const Provider = mongoose.model("Provider", ProviderSchema);
export default Provider;
