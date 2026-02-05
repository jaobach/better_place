import { pool } from "../config/db.js";

export const Student_model = {
  async getAll(classroom_id) {
    const res = await pool.query(`SELECT * FROM students WHERE classroom_id=${classroom_id}`);
    return res.rows;
  },

  async create(name, classroom_id, age) {
    const res = await pool.query(
      "INSERT INTO students (name, classroom_id, age, score) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, classroom_id, age, 0]
    );
    return res.rows[0];
  },
};
