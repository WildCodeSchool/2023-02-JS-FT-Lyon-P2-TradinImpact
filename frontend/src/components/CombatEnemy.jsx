import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatEnemy.module.css";

export default function CombatEnemy() {
  const { enemyPortrait, enemy } = useCombatContext();
  return (
    <div className={styles.enemyBox}>
      <img className={styles.enemyImg} src={enemyPortrait} alt={enemy.name} />
    </div>
  );
}
