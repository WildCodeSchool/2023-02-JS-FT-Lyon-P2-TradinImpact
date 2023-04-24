import PropTypes from "prop-types";
import Trade from "./Trade";
import styles from "./GameScreen.module.css";

export default function GameScreen({
  gameMode,
  inventory,
  setInventory,
  moraCount,
  setMoraCount,
}) {
  /* Selon le gameMode sélectionné dans le footer, le gamescreen change entre Trade, Gather et Fight */
  return (
    <div className={styles.gamescreenTrade}>
      {gameMode === "trade" ? (
        <Trade
          inventory={inventory}
          setInventory={setInventory}
          moraCount={moraCount}
          setMoraCount={setMoraCount}
        />
      ) : null}
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
