import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import AppContainer from "./components/AppContainer/AppContainer";
import GamesList from "./components/GameList/GameList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContainer>
      <Header />
      <GamesList />
    </AppContainer>
  </StrictMode>,
);
