import { pool } from "../config/db.js";

export const Classroom_model = {
  async getAll() {
    const res = await pool.query("SELECT * FROM classrooms");
    return res.rows;
  },

  async create(name, school_id) {
    console.log(name, school_id)
    const res = await pool.query(
      "INSERT INTO classrooms (name, school_id) VALUES ($1, $2) RETURNING *",
      [name, school_id]
    );
    return res.rows[0];
  },
};
