import { Routes, Route } from "react-router-dom";
import Trade from "./Trade";

export default function GameScreen() {
  return (
    <Routes>
      <Route path="/" element={<Trade />} />
    </Routes>
  );
}
