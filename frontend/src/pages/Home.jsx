import { useState } from "react";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Footer from "../components/Footer";

export default function Home() {
  const [moraCount, setMoraCount] = useState(20);
  const [gameMode, setGameMode] = useState("trade");

  return (
    <>
      <Header moraCount={moraCount} setMoraCount={setMoraCount} />
      <GameScreen gameMode={gameMode} setGameMode={setGameMode} />
      <Footer gameMode={gameMode} setGameMode={setGameMode} />
    </>
  );
}
