import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./PresentationCombat.module.css";

export default function PresentationCombat({ random }) {
  // Import des states nécessaires depuis le Context
  const { setCombatScreen } = useCombatContext();
  const [enemy, setEnemy] = useState(null);
  const [enemyPortrait, setEnemyPortrait] = useState(null);

  const enemies = [
    "abyss-mage",
    "slime",
    "lawachurl",
    "whopperflower",
    "geovishap",
    "ruin-guard",
  ];
  let randomEnemy = null;
  // Génération aléatoire d'un ennemi et enregistrement de ses données dans le state enemy, ainsi que son portrait dans le state enemyPortrait
  const handleNewEnemy = () => {
    const randomIndex = random(0, enemies.length - 1);
    randomEnemy = enemies[randomIndex];
    setEnemyPortrait(`https://api.genshin.dev/enemies/${randomEnemy}/portrait`);

    fetch(`https://api.genshin.dev/enemies/${randomEnemy}`)
      .then((response) => response.json())
      .then((data) => {
        setEnemy(data);
      });
  };

  // le useEffect sélectionne un ennmi aléatoire au chargement du composant
  useEffect(() => {
    handleNewEnemy();
  }, []);

  // Affichage de la modale de présentation et du bouton pour lancer le jeu
  return (
    <div className={styles.presentationCombat}>
      <div>
        Press <span>Start</span> to fight an evil monster
      </div>
      <button type="button" onClick={() => setCombatScreen("game")}>
        Start
      </button>
      {enemy && (
        <div>
          <h3>Enemy name : {enemy.name}</h3>
          <img src={enemyPortrait} alt={enemy.name} />
          <p>Drops :</p>
          <div className="dropContainer">
            <p>{enemy.drops[0].name}</p>
            <img
              className="enemyDrop"
              src={`https://api.genshin.dev/materials/common-ascension/${enemy.drops[0].name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              alt={enemy.drops[0].name}
            />
            <p>{enemy !== null ? enemy.drops[1].name : null}</p>
            <img
              className="enemyDrop"
              src={`https://api.genshin.dev/materials/common-ascension/${enemy.drops[1].name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              alt={enemy.drops[1].name}
            />
          </div>
        </div>
      )}
    </div>
  );
}

PresentationCombat.propTypes = {
  random: PropTypes.func.isRequired,
};
