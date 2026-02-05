import { Student_service } from "../services/Student_service.js";

export const Student_controller = {
  async list(req, res) {
    try {
      const { classroom_id } = req.query;
      
      const students = await Student_service.getAll(classroom_id);
      res.json(students);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    //VERIFICAR CAMPOS OBRIGATORIOS
    const { name, classroom_id, age } = req.body;
    try {
      const students = await Student_service.create(name, classroom_id, age);
      res.status(201).json(students);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
