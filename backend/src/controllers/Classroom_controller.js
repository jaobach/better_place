import { Classroom_service } from "../services/Classroom_service.js";

export const Classroom_controller = {
  async getAll(req, res) {
    try {
      const classrooms = await Classroom_service.getAll();
      return res.status(200).json(classrooms);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Erro ao buscar turmas" });
    }
  },

  async create(req, res) {
    try {
      const { name, school_id } = req.body;
      if (!name || !school_id) {
        return res
          .status(400)
          .json({ message: "name e school_id são obrigatórios" });
      }

      const classroom = await Classroom_service.create(
        name,
        school_id
      );

      return res.status(201).json(classroom);
    } catch (err) {
      if(err.message == "INVALID_SCHOOL_ID"){
        return res.status(400).json({
            message: "school_id inexistente"
        })
      }
      return res.status(500).json({ message: "Erro ao criar turma", err });
    }
  }
};
