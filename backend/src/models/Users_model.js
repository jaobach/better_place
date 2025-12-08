import { pool } from "../config/db.js";

export const User_model = {
  async getAll() {
    const res = await pool.query("SELECT * FROM users");
    return res.rows;
  },

  async create(name, email) {
    const res = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return res.rows[0];
  },
};
