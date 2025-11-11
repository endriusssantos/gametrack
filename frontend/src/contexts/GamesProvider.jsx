import { useState, useEffect } from "react";
import { GamesContext } from "./GamesContext";

export const GamesProvider = ({ children }) => {
  const [favoriteGames, setFavoriteGames] = useState(() => {
    const saved = localStorage.getItem("favoriteGames");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
  }, [favoriteGames]);

  const toggleFavorite = (game) => {
    setFavoriteGames((prev) => {
      const isFavorite = prev.some((g) => g.id === game.id);
      if (isFavorite) {
        return prev.filter((g) => g.id !== game.id);
      } else {
        return [...prev, { ...game, status: "Desejo jogar" }];
      }
    });
  };

  const updateStatus = (id, newStatus) => {
    setFavoriteGames((prev) =>
      prev.map((g) => (g.id === id ? { ...g, status: newStatus } : g)),
    );
  };

  return (
    <GamesContext.Provider
      value={{ favoriteGames, toggleFavorite, updateStatus }}
    >
      {children}
    </GamesContext.Provider>
  );
};
