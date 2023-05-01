import { useEffect } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./JanKenPon.module.css";

export default function JanKenPon() {
  // Import des States depuis le Context
  const {
    playerChoice,
    setPlayerChoice,
    enemyChoice,
    setEnemyChoice,
    setResult,
  } = useCombatContext();

  // Fonction permettant de générer le choix de jeu de l'ennemi
  const randomEnemyChoice = () => {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomChoiceIndex = Math.floor(Math.random() * choiceArray.length);
    setEnemyChoice(choiceArray[randomChoiceIndex]);
  };

  /* Gestionnaire d'event onClick, met le choix du joueur en mémoire dans un State 
  et lance la fonction pour générer le choix de l'ennemi */
  const handleClickChoice = (value) => {
    setPlayerChoice(value);
    randomEnemyChoice();
  };

  useEffect(() => {
    // Vérifie le résultat du round
    if (
      (enemyChoice === "scissors" && playerChoice === "rock") ||
      (enemyChoice === "paper" && playerChoice === "scissors") ||
      (enemyChoice === "rock" && playerChoice === "paper")
    ) {
      setResult("win");
    } else if (
      (enemyChoice === "rock" && playerChoice === "scissors") ||
      (enemyChoice === "scissors" && playerChoice === "paper") ||
      (enemyChoice === "paper" && playerChoice === "rock")
    ) {
      setResult("lose");
    } else if (
      (enemyChoice === "rock" && playerChoice === "rock") ||
      (enemyChoice === "scissors" && playerChoice === "scissors") ||
      (enemyChoice === "paper" && playerChoice === "paper")
    ) {
      setResult("draw");
    }
    // Timer pour reset le choix du joueur et de l'ennemi et pouvoir passer à la prochaine manche
    const reset = setTimeout(() => {
      setPlayerChoice("");
      setEnemyChoice("");
      setResult(null);
    }, 2000);
    return () => clearTimeout(reset);
  }, [playerChoice, enemyChoice]);

  return (
    <div className={styles.janKenPon}>
      <button
        type="button"
        disabled={playerChoice !== "rock" && playerChoice !== ""}
        className={
          playerChoice === "rock"
            ? `${styles.JKPButton} ${styles.active}`
            : `${styles.JKPButton}`
        }
        onClick={() => handleClickChoice("rock")}
      >
        <img src="./src/assets/rock.png" alt="stones" />
      </button>
      <button
        type="button"
        disabled={playerChoice !== "paper" && playerChoice !== ""}
        className={
          playerChoice === "paper"
            ? `${styles.JKPButton} ${styles.active}`
            : `${styles.JKPButton}`
        }
        onClick={() => handleClickChoice("paper")}
      >
        <img src="./src/assets/paper.png" alt="leaves" />
      </button>
      <button
        type="button"
        disabled={playerChoice !== "scissors" && playerChoice !== ""}
        className={
          playerChoice === "scissors"
            ? `${styles.JKPButton} ${styles.active}`
            : `${styles.JKPButton}`
        }
        onClick={() => handleClickChoice("scissors")}
      >
        <img src="./src/assets/scissors.png" alt="scissors" />
      </button>
    </div>
  );
}