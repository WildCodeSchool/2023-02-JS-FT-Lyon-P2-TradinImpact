import PropTypes from "prop-types";
import { useState } from "react";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home({ playerName }) {
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
      <Header moraCount={moraCount} playerName={playerName} />
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

Home.propTypes = {
  playerName: PropTypes.string.isRequired,
};
