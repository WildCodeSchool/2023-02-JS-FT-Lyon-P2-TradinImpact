import { useState } from "react";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home() {
  const [moraCount, setMoraCount] = useState(20);
  const [gameMode, setGameMode] = useState("trade");
  const [inventory, setInventory] = useState([
    {
      name: "Almond",
      description:
        "A seed with a peculiar fragrance that gives food a refreshing taste.",
      sources: ["Sold by Second Life", "Sold by Ms. Bai"],
      possessed: 1,
    },
    {
      name: "Bacon",
      description:
        "Smoked strips of pork. With just enough fat, but not too greasy.Mmmmm... Bacon.Meat must be processed first to be made into Bacon.",
      rarity: 3,
      sources: ["Sold by Good Hunter", "Processing"],
      possessed: 2,
    },
  ]);

  return (
    <div className={styles.layout}>
      <Header moraCount={moraCount} setMoraCount={setMoraCount} />
      <GameScreen
        gameMode={gameMode}
        setGameMode={setGameMode}
        inventory={inventory}
        setInventory={setInventory}
      />
      <Footer gameMode={gameMode} setGameMode={setGameMode} />
    </div>
  );
}
