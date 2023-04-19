import { Routes, Route } from "react-router-dom";
import PresentationTrade from "./PresentationTrade";

export default function Trade() {
  return (
    <Routes>
      <Route path="/" element={<PresentationTrade />} />
    </Routes>
  );
}
