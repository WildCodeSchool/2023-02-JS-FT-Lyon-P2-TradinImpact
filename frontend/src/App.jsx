import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Start from "./pages/Start";
import "./App.css";
import { GatherContextProvider } from "./contexts/GatherContext";
import { CombatContextProvider } from "./contexts/CombatContext";

function App() {
  const [playerName, setPlayerName] = useState("");

  return (
    <GatherContextProvider>
      <CombatContextProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <Start playerName={playerName} setPlayerName={setPlayerName} />
              }
            />
            <Route path="/home" element={<Home playerName={playerName} />} />
          </Routes>
        </div>
      </CombatContextProvider>
    </GatherContextProvider>
  );
}

export default App;
