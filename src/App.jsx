import { useState } from "react";
import Header from "./components/Header/Header";
import GamesList from "./components/GameList/GameList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="pt-safe-top pb-safe-bottom flex min-h-[100dvh] flex-col bg-gray-950 font-[Poppins]">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <GamesList searchTerm={searchTerm} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
