import { useState, useEffect } from "react";
import { useGatherContext } from "../contexts/GatherContext";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home() {
  // Gather
  // Import du context de Gather
  const {
    setGatherScreen,
    cooldownGather,
    setCooldownGather,
    startCooldown,
    setStartCooldown,
  } = useGatherContext();

  // Lance le cooldown du Gather une fois la modal de recap fermée
  useEffect(() => {
    if (startCooldown === true) {
      const countdown = setTimeout(
        () => setCooldownGather(cooldownGather - 1),
        1000
      );
      // Reset les différents states à la fin du cooldown
      if (cooldownGather === 0) {
        clearTimeout(countdown);
        setStartCooldown(false);
        setGatherScreen("presentation");
        setCooldownGather(90);
      }
    }
  }, [cooldownGather]);

  // Trade
  // Création des states
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
  ]);

  return (
    <div className={styles.layout}>
      <Header moraCount={moraCount} setMoraCount={setMoraCount} />
      <GameScreen
        gameMode={gameMode}
        setGameMode={setGameMode}
        inventory={inventory}
        setInventory={setInventory}
        moraCount={moraCount}
        setMoraCount={setMoraCount}
      />
      <Footer gameMode={gameMode} setGameMode={setGameMode} />
    </div>
  );
}
