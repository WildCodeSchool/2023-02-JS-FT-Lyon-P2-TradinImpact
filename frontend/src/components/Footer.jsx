import PropTypes from "prop-types";
import styles from "./Footer.module.css";

export default function Footer({ setGameMode }) {
  return (
    <div className={styles.gamepickcontainer}>
      <button
        className={styles.icon}
        id="collect-icon"
        type="button"
        onClick={() => setGameMode("gather")}
      >
        <img src="./src/assets/basket.png" alt="collect icon" />
      </button>
      <button
        className={`${styles.icon} ${styles.active}`}
        id="trade-icon"
        type="button"
        onClick={() => setGameMode("trade")}
      >
        <img
          className={styles.activeImg}
          src="./src/assets/bourse2.png"
          alt="trade icon"
        />
      </button>
      <div className={styles.icon} id="fight-icon">
        <img src="./src/assets/sword-icon.png" alt="combat icon" />
      </div>
    </div>
  );
}

Footer.propTypes = {
  setGameMode: PropTypes.func.isRequired,
};
