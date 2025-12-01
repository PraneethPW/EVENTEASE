// src/controllers/providerController.js
import Provider from "../models/Provider.js";

export const createProvider = async (req, res, next) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(201).json(provider);
  } catch (err) {
    next(err);
  }
};

export const getProviders = async (req, res, next) => {
  try {
    const providers = await Provider.find().sort({ rating: -1 });
    res.json(providers);
  } catch (err) {
    next(err);
  }
};

export const getProviderById = async (req, res, next) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }
    res.json(provider);
  } catch (err) {
    next(err);
  }
};
