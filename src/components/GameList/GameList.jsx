import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../../services/rawg";

const GameList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games"],
    queryFn: () => fetchGames({ page_size: 9 }),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading)
    return (
      <div className="pt-100 text-center text-white">Carregando jogos...</div>
    );
  if (isError)
    return (
      <div className="pt-100 text-center text-red-400">
        Erro: {error.message}
      </div>
    );

  const games = data?.results || [];

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">Top Jogos</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {games.map((g) => (
          <div key={g.id} className="overflow-hidden rounded bg-slate-800 p-2">
            <img
              src={g.background_image}
              alt={g.name}
              className="h-60 w-full rounded object-cover"
            />
            <div className="flex items-center justify-between p-3">
              <div className="mt-2">
                <h3 className="text-sm font-medium text-white">{g.name}</h3>
                <p
                  className={`text-xs font-semibold ${
                    g.metacritic >= 75
                      ? "text-green-400"
                      : g.metacritic >= 50
                        ? "text-yellow-400"
                        : "text-red-400"
                  }`}
                >
                  Metacritic: {g.metacritic ? `${g.metacritic}/100` : "N/A"}
                </p>
              </div>
              <div>
                <button className="cursor-pointer rounded-xl px-3 py-2 text-white transition-all duration-300 hover:bg-blue-900">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
