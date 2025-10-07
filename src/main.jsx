import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import AppContainer from "./components/AppContainer/AppContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContainer>
      <Header />
    </AppContainer>
  </StrictMode>,
);
