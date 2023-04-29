import PropTypes from "prop-types";
import Trade from "./Trade";
import Gather from "./Gather";
import Combat from "./Combat";
import styles from "./GameScreen.module.css";

export default function GameScreen({
  gameMode,
  inventory,
  setInventory,
  moraCount,
  setMoraCount,
}) {
  /* simple fonction random réutilisable */
  const random = (min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1)) + min;
  };

  /* Selon le gameMode sélectionné dans le footer, le gamescreen change entre Trade, Gather et Fight */
  if (gameMode === "trade") {
    return (
      <div className={`${styles.gamescreen} ${styles.trade}`}>
        <Trade
          inventory={inventory}
          setInventory={setInventory}
          moraCount={moraCount}
          setMoraCount={setMoraCount}
          random={random}
        />
      </div>
    );
  }
  if (gameMode === "gather") {
    return (
      <div className={`${styles.gamescreen} ${styles.gather}`}>
        <Gather
          inventory={inventory}
          setInventory={setInventory}
          random={random}
        />
      </div>
    );
  }
  if (gameMode === "combat") {
    return (
      <div className={`${styles.gamescreen} ${styles.combat}`}>
        <Combat />{" "}
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
