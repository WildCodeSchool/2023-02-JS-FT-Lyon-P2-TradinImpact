import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./components/Start";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
