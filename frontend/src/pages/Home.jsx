import { useState } from "react";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home() {
  const [moraCount, setMoraCount] = useState(20);
  const [gameMode, setGameMode] = useState("trade");

  return (
    <div className={styles.layout}>
      <Header moraCount={moraCount} setMoraCount={setMoraCount} />
      <GameScreen gameMode={gameMode} setGameMode={setGameMode} />
      <Footer gameMode={gameMode} setGameMode={setGameMode} />
    </div>
  );
}
