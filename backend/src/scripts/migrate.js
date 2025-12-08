import fs from "fs";
import path from "path";
import { pool } from "../config/db.js";

async function runMigrations() {
  try {
    const migrationsDir = path.join(process.cwd(), "src/migrations");
    const files = fs.readdirSync(migrationsDir);

    for (const file of files) {
      if (file.endsWith(".sql")) {
        const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
        console.log(`➡️ Executando migração: ${file}`);
        await pool.query(sql);
      }
    }

    console.log("✅ Todas as migrações foram aplicadas com sucesso!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Erro nas migrações:", err);
    process.exit(1);
  }
}

runMigrations();
