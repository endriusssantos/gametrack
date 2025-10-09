import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import AppContainer from "./components/AppContainer/AppContainer";
import GamesList from "./components/GameList/GameList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Header />
        <GamesList />
      </AppContainer>
    </QueryClientProvider>
  </StrictMode>,
);
