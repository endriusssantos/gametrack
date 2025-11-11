import { useContext } from "react";
import { GamesContext } from "../contexts/GamesContext";

export default function MyGames() {
  const { favoriteGames, updateStatus, toggleFavorite } =
    useContext(GamesContext);

  if (favoriteGames.length === 0) {
    return (
      <p className="m-auto text-center text-white">
        Nenhum jogo adicionado ainda
      </p>
    );
  }

  return (
    <div className="p-6 text-white">
      <h2 className="mb-4 text-xl font-semibold">Meus Jogos</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {favoriteGames.map((g) => (
          <div key={g.id} className="overflow-hidden rounded bg-slate-800 p-3">
            <img
              src={g.background_image}
              alt={g.name}
              className="h-60 w-full rounded object-cover"
            />
            <div className="mt-3 flex items-center justify-between">
              <h3 className="text-sm font-medium">{g.name}</h3>
              <button
                onClick={() => toggleFavorite(g)}
                className="text-sm text-red-400 hover:text-red-600 cursor-pointer"
              >
                Remover
              </button>
            </div>
            <div className="mt-3">
              <label className="text-xs text-gray-300">Status:</label>
              <select
                value={g.status}
                onChange={(e) => updateStatus(g.id, e.target.value)}
                className="mt-1 w-full rounded bg-blue-900 p-2 text-white"
              >
                <option>Desejo jogar</option>
                <option>Jogado</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
