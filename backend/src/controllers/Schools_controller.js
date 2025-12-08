import { School_model } from "../models/Schools_model.js";

export const School_controller = {
  async list(req, res) {
    try {
      const schools = await School_model.getAll();
      res.json(schools);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    const { name, email } = req.body;
    try {
      const schools = await School_model.create(name, email);
      res.status(201).json(schools);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
