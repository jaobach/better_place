import { pool } from "../config/db.js";

export const School_model = {
  async getAll() {
    const res = await pool.query("SELECT * FROM schools");
    return res.rows;
  },

  async create(name, email) {
    const res = await pool.query(
      "INSERT INTO schools (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return res.rows[0];
  },
};
