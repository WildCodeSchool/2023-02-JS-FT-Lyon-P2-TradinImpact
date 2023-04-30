import styles from "./CombatGame.module.css";
import CombatEnemy from "./CombatEnemy";
import JanKenPon from "./JanKenPon";

export default function CombatGame() {
  return (
    <div className={styles.combatGame}>
      <div className={styles.enemyInfos}>*enemy.name* - *enemy.hp*</div>
      <CombatEnemy />
      <div className={styles.playerInfos}>You have *player.hp*</div>
      <JanKenPon />
    </div>
  );
}
