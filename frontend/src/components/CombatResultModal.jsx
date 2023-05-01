import PropTypes from "prop-types";
import { useEffect } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatResultModal.module.css";

export default function CombatResultModal({ moraCount, setMoraCount }) {
  const {
    setCombatScreen,
    matchWinner,
    setEnemyHP,
    setPlayerHP,
    setMatchWinner,
    setShowCombatResultModal,
    enemy,
    moraLoss,
    setMoraLoss,
  } = useCombatContext();

  useEffect(() => {
    if (matchWinner === "enemy") {
      setMoraCount(Math.ceil(moraCount * 0.9));
      setMoraLoss(Math.floor(moraCount * 0.1));
    }
  }, []);

  const handleClick = () => {
    setCombatScreen("presentation");
    setMatchWinner(null);
    setShowCombatResultModal(false);
    setEnemyHP(10);
    setPlayerHP(10);
  };
  return (
    <div className={styles.background}>
      {matchWinner === "player" ? (
        <div className={styles.resultModal}>
          <h3>
            {" "}
            You win! <br />
            {enemy.name} dropped this item before running away :
          </h3>
          <div>
            <img src="" alt="item" />
            <h4>itemname*</h4>
          </div>
          <button type="button" onClick={() => handleClick()}>
            Close
          </button>
        </div>
      ) : (
        <div className={styles.resultModal}>
          <h3>
            {" "}
            You lost! <br />
            {enemy.name} extorted {moraLoss} moras from you before running
            away...
          </h3>
          <button type="button" onClick={() => handleClick()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

CombatResultModal.propTypes = {
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
};
