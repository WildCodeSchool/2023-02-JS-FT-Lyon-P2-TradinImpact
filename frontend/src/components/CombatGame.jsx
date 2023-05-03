import PropTypes from "prop-types";
import { useEffect } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatGame.module.css";
import CombatEnemy from "./CombatEnemy";
import CombatResultModal from "./CombatResultModal";
import JanKenPon from "./JanKenPon";

export default function CombatGame({
  inventory,
  setInventory,
  moraCount,
  setMoraCount,
  random,
}) {
  const {
    enemyChoice,
    result,
    enemyHP,
    setEnemyHP,
    playerHP,
    setPlayerHP,
    setMatchWinner,
    showCombatResultModal,
    setShowCombatResultModal,
    enemy,
    setOuch,
  } = useCombatContext();

  const damage = random(3, 5);

  const ongoingMatch = playerHP > 0 && enemyHP > 0;

  useEffect(() => {
    if (ongoingMatch && result === "win") {
      setEnemyHP(Math.max(enemyHP - damage, 0));
      setOuch("enemy");
      setTimeout(() => setOuch(null), 800);
    } else if (ongoingMatch && result === "lose") {
      setPlayerHP(Math.max(playerHP - damage, 0));
      setOuch("player");
      setTimeout(() => setOuch(null), 800);
    }
  }, [result]);

  useEffect(() => {
    if (enemyHP === 0) {
      setMatchWinner("player");
      setShowCombatResultModal(true);
    } else if (playerHP === 0) {
      setMatchWinner("enemy");
      setShowCombatResultModal(true);
    }
  });

  return (
    <div className={styles.combatGame}>
      {showCombatResultModal ? (
        <CombatResultModal
          moraCount={moraCount}
          setMoraCount={setMoraCount}
          inventory={inventory}
          setInventory={setInventory}
        />
      ) : null}
      <div className={styles.enemyInfos}>
        <p>
          {enemy.name} - {enemyHP} HP
        </p>
        <CombatEnemy />
        {enemyChoice !== "" ? (
          <div className={styles.enemyChoice}>
            <img src={`./src/assets/${enemyChoice}.png`} alt={enemyChoice} />
          </div>
        ) : null}
      </div>
      {result === "win" && (
        <div className={`${styles.result} ${styles.win}`}>
          You win this round
        </div>
      )}
      {result === "draw" && (
        <div className={`${styles.result} ${styles.draw}`}>Draw</div>
      )}
      {result === "lose" && (
        <div className={`${styles.result} ${styles.lose}`}>
          You lose this round
        </div>
      )}
      <div className={styles.playerInfos}>
        <p>You have {playerHP} HP</p>
        <JanKenPon />
      </div>
    </div>
  );
}

CombatGame.propTypes = {
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
};
