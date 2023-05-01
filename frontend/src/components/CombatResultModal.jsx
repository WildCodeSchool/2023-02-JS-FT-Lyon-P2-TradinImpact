import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatResultModal.module.css";

export default function CombatResultModal() {
  //   {
  //     //   moraCount,
  //     //   setMoraCount,
  //   }
  const {
    setCombatScreen,
    matchWinner,
    setEnemyHP,
    setPlayerHP,
    setMatchWinner,
    setShowCombatResultModal,
  } = useCombatContext();
  //   console.log(matchWinner);
  //   console.log(moraCount);
  /*   if (matchWinner === "enemy") {
    setMoraCount(Math.ceil(moraCount * 0.9));
  } */
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
            enemyname* dropped this item before running away :
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
            enemyname* extorted X{/* {Math.floor(moraCount * 0.1)} */} moras
            from you before running away...
          </h3>
          <button type="button" onClick={() => handleClick()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
