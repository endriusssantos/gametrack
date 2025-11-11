import { useState, useContext } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import About from "./pages/About";
import MyGames from "./pages/MyGames";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { user } = useContext(AuthContext);

  const resetApp = () => {
    setSearchTerm("");
    setPage(1);
  };

  return (
    <div className="pt-safe-top pb-safe-bottom flex min-h-[100dvh] flex-col bg-gray-950 font-[Poppins]">
      <Header
        resetApp={resetApp}
        searchTerm={searchTerm}
        setSearchTerm={(term) => {
          setSearchTerm(term);
          setPage(1);
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home searchTerm={searchTerm} page={page} setPage={setPage} />
          }
        />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-games" element={user ? <MyGames /> : <Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
