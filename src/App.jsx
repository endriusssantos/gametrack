import { useState } from "react";
import Header from "./components/Header/Header";
import GamesList from "./components/GameList/GameList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const resetApp = () => {
    setSearchTerm("");
    setPage(1);
    queryClient.invalidateQueries(["games"]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="pt-safe-top pb-safe-bottom flex min-h-[100dvh] flex-col bg-gray-950 font-[Poppins]">
        <Header
          resetApp={resetApp}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <GamesList searchTerm={searchTerm} page={page} setPage={setPage} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
