import { Router } from "express";
import { prisma } from "../prismaClient.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

export default router;
