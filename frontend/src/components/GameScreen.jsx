import PropTypes from "prop-types";
import Trade from "./Trade";
import Gather from "./Gather";
import styles from "./GameScreen.module.css";

export default function GameScreen({
  gameMode,
  inventory,
  setInventory,
  moraCount,
  setMoraCount,
}) {
  /* Selon le gameMode sélectionné dans le footer, le gamescreen change entre Trade, Gather et Fight */
  if (gameMode === "trade") {
    return (
      <div className={`${styles.gamescreen} ${styles.trade}`}>
        <Trade
          inventory={inventory}
          setInventory={setInventory}
          moraCount={moraCount}
          setMoraCount={setMoraCount}
        />
      </div>
    );
  }
  if (gameMode === "gather") {
    return (
      <div className={`${styles.gamescreen} ${styles.gather}`}>
        <Gather inventory={inventory} setInventory={setInventory} />
      </div>
    );
  }

  GameScreen.propTypes = {
    gameMode: PropTypes.string.isRequired,
    inventory: PropTypes.arrayOf.isRequired,
    setInventory: PropTypes.func.isRequired,
    moraCount: PropTypes.number.isRequired,
    setMoraCount: PropTypes.func.isRequired,
  };
}
