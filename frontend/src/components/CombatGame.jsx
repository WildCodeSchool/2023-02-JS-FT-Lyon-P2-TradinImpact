import { useState } from "react";
import styles from "./CombatGame.module.css";
import CombatEnemy from "./CombatEnemy";
import JanKenPon from "./JanKenPon";

export default function CombatGame() {
  /*   inventory,
  setInventory,
  moraCount,
  setMoraCount */
  const [enemyHP, setEnemyHP] = useState(10);
  const [roundWinner, setRoundWinner] = useState(null);
  /*  Cet état pourrait stocker dynamiquement le vainqueur de chaque manche */
  const dropRarity = 2;
  //    Il s'agit d'une valeur test, à remplacer par la valeur de la propriété
  // "rarity" dans l'objet stocké dans le state qui sera alimenté par l'appel à l'API

  const random = (min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1)) + min;
  };
  const damage = random(3, 5);

  const getEnemyHP = (rarity) => {
    if (rarity === 1) {
      setEnemyHP(9);
    } else if (rarity === 2) {
      setEnemyHP(10);
    } else if (rarity === 3) {
      setEnemyHP(11);
    } else if (rarity === 4) {
      setEnemyHP(12);
    }
  };

  let playerHP = 10;
  getEnemyHP(dropRarity);
  const ongoingMatch = playerHP > 0 && enemyHP > 0 && roundWinner != null;

  if (ongoingMatch && roundWinner === "player") {
    setEnemyHP(enemyHP - damage);
    setRoundWinner(null);
  } else if (ongoingMatch && roundWinner === "enemy") {
    playerHP -= damage;
    setRoundWinner(null);
  }
  return (
    <div className={styles.combatGame}>
      <div className={styles.enemyInfos}>*enemy.name* - *enemy.hp*</div>
      <CombatEnemy />
      <div className={styles.playerInfos}>You have {playerHP} HP</div>
      <JanKenPon />
    </div>
  );
}
