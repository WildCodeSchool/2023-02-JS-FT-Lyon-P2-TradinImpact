import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatGame.module.css";
import CombatEnemy from "./CombatEnemy";
import JanKenPon from "./JanKenPon";

export default function CombatGame() {
  const { enemyChoice, result, enemy } = useCombatContext();

  return (
    <div className={styles.combatGame}>
      <div className={styles.enemyInfos}>
        <p>{enemy.name} - *enemy.hp*</p>
        {enemyChoice !== "" ? (
          <div className={styles.enemyChoice}>
            <img src={`./src/assets/${enemyChoice}.png`} alt={enemyChoice} />
          </div>
        ) : null}
        <CombatEnemy />
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
        <p>You have *player.hp*</p>
        <JanKenPon />
      </div>
    </div>
  );
}
