import GameList from "../components/GameList/GameList";

export default function Home({ searchTerm, page, setPage }) {
  return <GameList searchTerm={searchTerm} page={page} setPage={setPage} />;
}
