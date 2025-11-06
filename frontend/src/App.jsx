import { useState } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import About from "./pages/About";
import MyGames from "./pages/MyGames";
import Home from "./pages/Home";

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
            <Home searchTerm={searchTerm} page={page} setPage={setPage} />
          }
        />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-games" element={<MyGames />} />
      </Routes>
    </div>
  );
};

export default App;
