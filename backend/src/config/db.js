import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "joaovbach",
  host: "localhost",
  database: "bpdb",
  password: "dseki1928",
  port: 5432,
});
