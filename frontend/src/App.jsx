import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Start from "./pages/Start";
import "./App.css";
import { GatherContextProvider } from "./contexts/GatherContext";
import { CombatContextProvider } from "./contexts/CombatContext";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameMode, setGameMode] = useState("trade");
  let appClass = "App";

  if (gameMode === "trade") {
    appClass = "App AppTrade";
  } else if (gameMode === "combat") {
    appClass = "App AppCombat";
  } else if (gameMode === "gather") {
    appClass = "App AppGather";
  }

  return (
    <GatherContextProvider>
      <CombatContextProvider>
        <div className={appClass}>
          <Routes>
            <Route
              path="/"
              element={
                <Start playerName={playerName} setPlayerName={setPlayerName} />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  gameMode={gameMode}
                  setGameMode={setGameMode}
                  playerName={playerName}
                />
              }
            />
          </Routes>
        </div>
      </CombatContextProvider>
    </GatherContextProvider>
  );
}

export default App;
