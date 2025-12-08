import express from "express";
import cors from "cors";
import Users_route from "./routes/Users_route.js";
import Schools_route from "./routes/Schools._route.js";

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/users", Users_route);
app.use("/school", Schools_route);

app.listen(3001, () => {
  console.log("API rodando em http://localhost:3001");
});
