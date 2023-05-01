import { useEffect } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatGame.module.css";
import CombatEnemy from "./CombatEnemy";
import CombatResultModal from "./CombatResultModal";
import JanKenPon from "./JanKenPon";

export default function CombatGame(
  inventory,
  setInventory,
  moraCount,
  setMoraCount
) {
  const {
    enemyChoice,
    result,
    // setCombatScreen,
    enemyHP,
    setEnemyHP,
    playerHP,
    setPlayerHP,
    // matchWinner,
    setMatchWinner,
    showCombatResultModal,
    setShowCombatResultModal,
  } = useCombatContext();

  // const dropRarity = 2;
  //    Il s'agit d'une valeur test, à remplacer par la valeur de la propriété
  // "rarity" dans l'objet stocké dans le state qui sera alimenté par l'appel à l'API

  const random = (min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1)) + min;
  };
  const damage = random(3, 5);

  // const getEnemyHP = (rarity) => {
  //   if (rarity === 1) {
  //     setEnemyHP(9);
  //   } else if (rarity === 2) {
  //     setEnemyHP(10);
  //   } else if (rarity === 3) {
  //     setEnemyHP(11);
  //   } else if (rarity === 4) {
  //     setEnemyHP(12);
  //   }
  // };

  // getEnemyHP(dropRarity);
  const ongoingMatch = playerHP > 0 && enemyHP > 0;

  useEffect(() => {
    if (ongoingMatch && result === "win") {
      setEnemyHP(Math.max(enemyHP - damage, 0));
    } else if (ongoingMatch && result === "lose") {
      setPlayerHP(Math.max(playerHP - damage, 0));
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
  // const winner = playerHP === 0 || enemyHP === 0;

  return (
    <div className={styles.combatGame}>
      {showCombatResultModal ? (
        <CombatResultModal moraCount={moraCount} setMoraCount={setMoraCount} />
      ) : null}
      <div className={styles.enemyInfos}>
        <p>*enemy.name* - {enemyHP} HP</p>
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
        <p>You have {playerHP} HP</p>
        <JanKenPon />
      </div>
    </div>
  );
}
