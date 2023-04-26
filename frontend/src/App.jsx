import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import "./App.css";
import { GatherContextProvider } from "./contexts/GatherContext";

function App() {
  return (
    <GatherContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </GatherContextProvider>
  );
}

export default App;
