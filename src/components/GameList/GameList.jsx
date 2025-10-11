import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../../services/rawg";
import { Link } from "react-router-dom";

const GameList = ({ searchTerm, page, setPage }) => {
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchTerm), 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const pageSize = 9;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["games", debouncedSearch, page],
    queryFn: () =>
      fetchGames({ page, page_size: pageSize, search: debouncedSearch }),
    keepPreviousData: true,
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
      <h2 className="mb-4 text-xl font-semibold text-white">Jogos</h2>
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
                <Link
                  to={`/game/${g.id}`}
                  className="cursor-pointer rounded-xl px-3 py-2 text-white transition-all duration-300 hover:bg-blue-900"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-4 text-white">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="cursor-pointer rounded bg-blue-800 px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="px-4 py-2">{page}</span>

        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data?.next}
          className="cursor-pointer rounded bg-blue-800 px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default GameList;
