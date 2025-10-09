import { useEffect, useState } from "react";
import { fetchGames } from "../../services/rawg";

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchGames({ page_size: 9 })
      .then((data) => {
        if (!mounted) return;
        setGames(data.results || []);
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError(err.message);
      })
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  if (loading) return <div className="p-6">Carregando jogos...</div>;
  if (error) return <div className="p-6 text-red-400">Erro: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Jogos (teste RAWG)
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {games.map((g) => (
          <div key={g.id} className="overflow-hidden rounded bg-slate-800 p-2">
            <img
              src={g.background_image}
              alt={g.name}
              className="h-70 w-full rounded object-cover"
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

export default GamesList;
