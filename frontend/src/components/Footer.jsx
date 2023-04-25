import PropTypes from "prop-types";
import styles from "./Footer.module.css";

export default function Footer({ gameMode, setGameMode }) {
  return (
    <div className={styles.gamepickcontainer}>
      <button
        className={
          gameMode === "gather"
            ? `${styles.icon} ${styles.active}`
            : `${styles.icon}`
        }
        id="collect-icon"
        type="button"
        onClick={() => setGameMode("gather")}
      >
        <img src="./src/assets/basket.png" alt="collect icon" />
      </button>
      <button
        className={
          gameMode === "trade"
            ? `${styles.icon} ${styles.active}`
            : `${styles.icon}`
        }
        id="trade-icon"
        type="button"
        onClick={() => setGameMode("trade")}
      >
        <img src="./src/assets/bourse2.png" alt="trade icon" />
      </button>
      <button
        disabled={gameMode !== "combat"}
        className={
          gameMode === "combat"
            ? `${styles.icon} ${styles.active}`
            : `${styles.icon}`
        }
        id="fight-icon"
        type="button"
        onClick={() => setGameMode("combat")}
      >
        <img src="./src/assets/sword-icon.png" alt="combat icon" />
      </button>
    </div>
  );
}

Footer.propTypes = {
  gameMode: PropTypes.string.isRequired,
  setGameMode: PropTypes.func.isRequired,
};
