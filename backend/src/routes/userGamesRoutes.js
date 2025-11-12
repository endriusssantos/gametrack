import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import {
  getUserGames,
  addUserGame,
  updateUserGameStatus,
  deleteUserGame,
} from "../controllers/userGamesController.js";

const router = express.Router();

router.use(authenticateToken);

router.get("/", getUserGames);
router.post("/", addUserGame);
router.patch("/:gameId", updateUserGameStatus);
router.delete("/:gameId", deleteUserGame);

export default router;
