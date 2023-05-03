import { useEffect } from "react";
import PropTypes from "prop-types";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./PresentationCombat.module.css";

export default function PresentationCombat({ random }) {
  // Import des states nécessaires depuis le Context
  const {
    combatScreen,
    setCombatScreen,
    setEnemy,
    enemy,
    setEnemyPortrait,
    setPlayerHP,
    setEnemyHP,
    setOuch,
    cooldownCombat,
  } = useCombatContext();

  const enemies = [
    "abyss-mage",
    "slime",
    "lawachurl",
    "whopperflower",
    "geovishap",
    "ruin-guard",
    "samachurl",
    "fatui-agent",
    "samachurl",
    "hilichurl",
    "fatui-cicin-mage",
  ];
  let randomEnemy = null;
  // Génération aléatoire d'un ennemi et enregistrement de ses données dans le state enemy, ainsi que son portrait dans le state enemyPortrait
  const handleNewEnemy = () => {
    const randomIndex = random(0, enemies.length - 1);
    randomEnemy = enemies[randomIndex];

    fetch(`https://api.genshin.dev/enemies/${randomEnemy}`)
      .then((response) => response.json())
      .then((data) => {
        setEnemy(data);
        setPlayerHP(10);
        setEnemyHP(10);
        setOuch(null);
      });
  };

  // le useEffect sélectionne un ennemi aléatoire au chargement du composant
  useEffect(() => {
    handleNewEnemy();
  }, []);

  // le useEffect définit le portrait de l'ennemi lorsque celui-ci a été sélectionné
  useEffect(() => {
    if (enemy) {
      setEnemyPortrait(
        `https://api.genshin.dev/enemies/${enemy.name
          .toLowerCase()
          .replaceAll(" ", "-")}/portrait`
      );
    }
  }, [enemy]);

  // Affichage de la modale de présentation et du bouton pour lancer le jeu
  if (combatScreen === "presentation" && cooldownCombat.started === false) {
    return (
      <div className={styles.presentationCombat}>
        <div>
          Press <span>Start</span> to fight an evil monster.
          <br /> <br />
          Choose carefully your attacks to bring the monster's HP down to 0.
        </div>
        <button type="button" onClick={() => setCombatScreen("game")}>
          Start
        </button>
      </div>
    );
  }

  if (
    combatScreen === "cooldown" ||
    (combatScreen === "presentation" && cooldownCombat.started === true)
  ) {
    return (
      <div className={styles.presentationCombat}>
        <div>Try again in {cooldownCombat.time}s</div>
      </div>
    );
  }
}

PresentationCombat.propTypes = {
  random: PropTypes.func.isRequired,
};
