import { Link, useParams } from "react-router-dom";
import { fetchGameById } from "../services/rawg";
import { useQuery } from "@tanstack/react-query";

const GameDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGameById(id),
  });

  if (isLoading)
    return (
      <div className="pt-100 text-center text-white">
        Carregando detalhes...
      </div>
    );
  if (isError)
    return (
      <div className="pt-100 text-center text-red-400">
        Erro: {error.message}
      </div>
    );

  function getEnglishDescription(text) {
    if (!text) return "";

    const splitText = text.split(/Español|Portugués|Français/i);
    return splitText[0].trim();
  }

  return (
    <div className="mx-auto my-5 flex max-w-[90%] flex-col gap-5 rounded-2xl bg-blue-950 p-6 text-center text-white lg:m-auto lg:max-w-1/2">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <img
        src={data.background_image}
        alt={data.name}
        className="h-64 w-full object-contain"
      />
      <p className="text-center">
        {getEnglishDescription(data.description_raw)}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <p>
          <span className="text-green-400">Lançamento:</span> {data.released}
        </p>
        <p>
          <span className="text-green-400">Desenvolvedora:</span>{" "}
          {data.developers.map((d) => d.name).join(", ")}
        </p>
        <p>
          <span className="text-green-400">Metacritic:</span>{" "}
          {data.metacritic !== null ? data.metacritic : "N/A"}
        </p>
        <p>
          <span className="text-green-400">Plataformas:</span>{" "}
          {data.platforms.map((p) => p.platform.name).join(", ")}
        </p>
      </div>
      <Link
        to="/"
        className="m-auto max-w-20 rounded-xl px-3 py-2 text-center font-bold transition-all duration-300 hover:bg-blue-900"
      >
        Voltar
      </Link>
    </div>
  );
};

export default GameDetails;
