import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../../services/rawg";

const GameList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games"],
    queryFn: () => fetchGames({ page_size: 9 }),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div className="p-6">Carregando jogos...</div>;
  if (isError)
    return <div className="p-6 text-red-400">Erro: {error.message}</div>;

  const games = data?.results || [];

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Jogos (com React Query)</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {games.map((g) => (
          <div key={g.id} className="overflow-hidden rounded bg-slate-800 p-2">
            <img
              src={g.background_image}
              alt={g.name}
              className="h-40 w-full rounded object-cover"
            />
            <div className="mt-2">
              <h3 className="text-sm font-medium">{g.name}</h3>
              <p className="text-xs text-gray-300">
                Nota: {g.rating} / {g.ratings_count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
