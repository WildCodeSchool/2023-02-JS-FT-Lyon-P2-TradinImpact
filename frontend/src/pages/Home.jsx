import PropTypes from "prop-types";
import { useState } from "react";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Footer from "../components/Footer";
import styles from "./Home.module.css";
import Encyclopedia from "../components/Encyclopedia";

export default function Home({ playerName, gameMode, setGameMode }) {
  // Trade
  // Création des states
  const [moraCount, setMoraCount] = useState(42);
  const [uncompleted, setUncompleted] = useState(true);
  const [inventory, setInventory] = useState([
    {
      name: "Almond",
      description:
        "A seed with a peculiar fragrance that gives food a refreshing taste.",
      sources: ["Sold by Second Life", "Sold by Ms. Bai"],
      possessed: 5,
    },
  ]);
  const [showEncyclopedia, setShowEncyclopedia] = useState(null);

  return (
    <div className={styles.layout}>
      {showEncyclopedia ? (
        <Encyclopedia
          inventory={inventory}
          setShowEncyclopedia={setShowEncyclopedia}
        />
      ) : null}
      <Header
        gameMode={gameMode}
        moraCount={moraCount}
        playerName={playerName}
        setShowEncyclopedia={setShowEncyclopedia}
        showEncyclopedia={showEncyclopedia}
      />
      <GameScreen
        showEncyclopedia={showEncyclopedia}
        setShowEncyclopedia={setShowEncyclopedia}
        gameMode={gameMode}
        setGameMode={setGameMode}
        inventory={inventory}
        setInventory={setInventory}
        moraCount={moraCount}
        setMoraCount={setMoraCount}
        uncompleted={uncompleted}
        setUncompleted={setUncompleted}
      />
      <Footer gameMode={gameMode} setGameMode={setGameMode} />
    </div>
  );
}

Home.propTypes = {
  playerName: PropTypes.string.isRequired,
  gameMode: PropTypes.string.isRequired,
  setGameMode: PropTypes.func.isRequired,
};
