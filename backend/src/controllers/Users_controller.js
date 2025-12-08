import { User_model } from "../models/Users_model.js";

export const User_controller = {
  async list(req, res) {
    try {
      const users = await User_model.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    const { name, email } = req.body;
    try {
      const user = await UserModel.create(name, email);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
