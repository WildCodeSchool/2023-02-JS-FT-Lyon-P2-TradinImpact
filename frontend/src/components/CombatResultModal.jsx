import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import styles from "./CombatResultModal.module.css";

export default function CombatResultModal({
  moraCount,
  setMoraCount,
  random,
  inventory,
  setInventory,
}) {
  const {
    setCombatScreen,
    matchWinner,
    setEnemyHP,
    setPlayerHP,
    setMatchWinner,
    setShowCombatResultModal,
    enemy,
    moraLoss,
    setMoraLoss,
  } = useCombatContext();

  const [combatLoot, setCombatLoot] = useState(null);
  useEffect(() => {
    if (matchWinner === "player") {
      const randomLoot = random(0, 10);
      if (randomLoot > 8) {
        setCombatLoot(enemy.drops[1]);
      } else {
        setCombatLoot(enemy.drops[0]);
      }
    }
  }, []);

  useEffect(() => {
    if (matchWinner === "enemy") {
      setMoraCount(Math.ceil(moraCount * 0.9));
      setMoraLoss(Math.floor(moraCount * 0.1));
    }
  }, []);

  const handleClick = () => {
    setCombatScreen("presentation");
    setMatchWinner(null);
    setShowCombatResultModal(false);
    setEnemyHP(10);
    setPlayerHP(10);
    if (combatLoot) {
      let itemGot = false;
      for (const item of inventory) {
        if (combatLoot.name === item.name) {
          item.possessed += 1;
          itemGot = true;
        }
      }
      if (itemGot === false) {
        combatLoot.possessed = 1;
        setInventory([...inventory, combatLoot]);
      }
    }
  };
  return (
    <div className={styles.background}>
      {matchWinner === "player" ? (
        <div className={styles.resultModal}>
          <h3>
            {" "}
            You win! <br />
            {enemy.name} dropped this item before running away :
          </h3>
          {combatLoot && (
            <div>
              <img
                src={`https://api.genshin.dev/materials/common-ascension/${combatLoot.name
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("'", "-")}`}
                alt={combatLoot.name}
              />
              <h4>{combatLoot.name}</h4>
            </div>
          )}
          <button type="button" onClick={() => handleClick()}>
            Close
          </button>
        </div>
      ) : (
        <div className={styles.resultModal}>
          <h3>
            {" "}
            You lost! <br />
            {enemy.name} extorted {moraLoss} moras from you before running
            away...
          </h3>
          <button type="button" onClick={() => handleClick()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

CombatResultModal.propTypes = {
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  setInventory: PropTypes.func.isRequired,
  inventory: PropTypes.arrayOf.isRequired,
};
