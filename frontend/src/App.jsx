import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./components/Start";
import "./App.css";
import { GatherContextProvider } from "./contexts/GatherContext";
import { CombatContextProvider } from "./contexts/CombatContext";

function App() {
  return (
    <GatherContextProvider>
      <CombatContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </CombatContextProvider>
    </GatherContextProvider>
  );
}

export default App;
