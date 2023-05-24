import PropTypes from "prop-types";
import { useGatherContext } from "../contexts/GatherContext";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./Footer.module.css";
import basket from "../assets/basket.png";
import purse from "../assets/bourse2.png";
import sword from "../assets/sword-icon.png";

export default function Footer({ gameMode, setGameMode }) {
  // Import du context de Gather pour afficher le cooldown
  const { gatherScreen, setGatherScreen, cooldownGather, coolDownBegin } =
    useGatherContext();
  const { combatScreen, setCombatScreen, cooldownCombat, coolDownCombatBegin } =
    useCombatContext();

  /* Au clic sur le bouton trade, change le gamemode et lance le cooldown pour Gather si le joueur 
  change de gamemode au milieu d'une partie */
  const handleClickGather = () => {
    setGameMode("gather");
    if (combatScreen !== "presentation" && combatScreen !== "cooldown") {
      setCombatScreen("presentation");
      coolDownCombatBegin();
    }
  };

  const handleClickTrade = () => {
    setGameMode("trade");
    if (gatherScreen !== "presentation" && gatherScreen !== "cooldown") {
      setGatherScreen("cooldown");
      coolDownBegin();
    }
    if (combatScreen !== "presentation" && combatScreen !== "cooldown") {
      setCombatScreen("presentation");
      coolDownCombatBegin();
    }
  };

  const handleClickCombat = () => {
    setGameMode("combat");
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
        onClick={handleClickGather}
      >
        {cooldownGather.started ? (
          <div className={styles.cooldown}>
            <span>{cooldownGather.time}</span>
          </div>
        ) : null}
        <img src={basket} alt="collect icon" />
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
        <img src={purse} alt="trade icon" />
      </button>
      <button
        className={
          gameMode === "combat"
            ? `${styles.icon} ${styles.active}`
            : `${styles.icon}`
        }
        id="fight-icon"
        type="button"
        onClick={handleClickCombat}
      >
        {cooldownCombat.started ? (
          <div className={styles.cooldown}>
            <span>{cooldownCombat.time}</span>
          </div>
        ) : null}
        <img src={sword} alt="combat icon" />
      </button>
    </div>
  );
}

Footer.propTypes = {
  gameMode: PropTypes.string.isRequired,
  setGameMode: PropTypes.func.isRequired,
};
