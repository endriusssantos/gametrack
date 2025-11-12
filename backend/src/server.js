import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userGamesRoutes from "./routes/userGamesRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user-games", userGamesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
