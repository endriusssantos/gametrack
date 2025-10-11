import { useState } from "react";
import Header from "./components/Header/Header";
import GamesList from "./components/GameList/GameList";
import { Routes, Route } from "react-router-dom";
import GameDetails from "./components/GameDetails/GameDetails";
import About from "./components/About/About";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const resetApp = () => {
    setSearchTerm("");
    setPage(1);
  };

  return (
    <div className="pt-safe-top pb-safe-bottom flex min-h-[100dvh] flex-col bg-gray-950 font-[Poppins]">
      <Header
        resetApp={resetApp}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <GamesList searchTerm={searchTerm} page={page} setPage={setPage} />
          }
        />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
