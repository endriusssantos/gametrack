import { prisma } from "../prismaClient.js";

export async function getUserGames(req, res) {
  const userId = req.user.id;
  try {
    const games = await prisma.user_games.findMany({
      where: { user_id: userId },
      include: { games: true },
    });
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar seus jogos" });
  }
}

export async function addUserGame(req, res) {
  const userId = req.user.id;
  const {
    gameId,
    title,
    platform,
    genre,
    cover_url,
    release_year,
    status,
    rating,
    progress,
  } = req.body;

  try {
    let game = await prisma.games.findUnique({
      where: { rawg_id: gameId },
    });

    if (!game) {
      game = await prisma.games.create({
        data: {
          rawg_id: gameId,
          title,
          platform,
          genre,
          cover_url,
          release_year,
        },
      });
    }

    const existingUserGame = await prisma.user_games.findFirst({
      where: {
        user_id: userId,
        game_id: game.id,
      },
    });

    if (existingUserGame) {
      return res.status(400).json({ error: "Esse jogo já está na sua lista" });
    }

    const newUserGame = await prisma.user_games.create({
      data: {
        user_id: userId,
        game_id: game.id,
        status: status || "wishlist",
        rating,
        progress,
      },
    });

    res.status(201).json(newUserGame);
  } catch (error) {
    console.error("Erro ao adicionar jogo:", error);
    res.status(500).json({ error: "Erro ao adicionar jogo à sua lista" });
  }
}

export async function updateUserGameStatus(req, res) {
  const userId = req.user.id;
  const gameId = parseInt(req.params.gameId);
  const { status, rating, progress } = req.body;

  try {
    const updated = await prisma.user_games.updateMany({
      where: {
        user_id: userId,
        game_id: gameId,
      },
      data: {
        status,
        rating,
        progress,
      },
    });
    res.json({ message: "Atualizado", count: updated.count });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar seu jogo" });
  }
}

export async function deleteUserGame(req, res) {
  const userId = req.user.id;
  const gameId = parseInt(req.params.gameId);

  try {
    await prisma.user_games.deleteMany({
      where: {
        user_id: userId,
        game_id: gameId,
      },
    });
    res.json({ message: "Jogo removido da sua lista" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover o jogo" });
  }
}
