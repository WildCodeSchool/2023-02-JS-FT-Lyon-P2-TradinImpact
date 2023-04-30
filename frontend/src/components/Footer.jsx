import PropTypes from "prop-types";
import { useGatherContext } from "../contexts/GatherContext";
import styles from "./Footer.module.css";

export default function Footer({ gameMode, setGameMode }) {
  // Import du context de Gather pour afficher le cooldown
  const { gatherScreen, setGatherScreen, cooldownGather, coolDownBegin } =
    useGatherContext();

  /* Au clic sur le bouton trade, change le gamemode et lance le cooldown pour Gather si le joueur 
  change de gamemode au milieu d'une partie */
  const handleClickTrade = () => {
    setGameMode("trade");
    if (gatherScreen !== "presentation" && gatherScreen !== "cooldown") {
      setGatherScreen("cooldown");
      coolDownBegin();
    }
  };

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
        {cooldownGather.started ? (
          <div className={styles.gatherCooldown}>
            <span>{cooldownGather.time}</span>
          </div>
        ) : null}
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
        onClick={handleClickTrade}
      >
        <img src="./src/assets/bourse2.png" alt="trade icon" />
      </button>
      <button
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
