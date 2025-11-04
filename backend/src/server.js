import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
