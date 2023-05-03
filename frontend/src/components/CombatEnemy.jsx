import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatEnemy.module.css";

export default function CombatEnemy() {
  const { enemyPortrait, enemy, ouch } = useCombatContext();
  return (
    <div
      className={
        ouch === "enemy"
          ? `${styles.enemyBox} ${styles.shook}`
          : `${styles.enemyBox}`
      }
    >
      <img className={styles.enemyImg} src={enemyPortrait} alt={enemy.name} />
    </div>
  );
}
