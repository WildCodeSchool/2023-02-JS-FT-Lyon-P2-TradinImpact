import PropTypes from "prop-types";
import { useEffect } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import PresentationCombat from "./PresentationCombat";
import CombatGame from "./CombatGame";

export default function Combat({
  random,
  inventory,
  setInventory,
  moraCount,
  setMoraCount,
}) {
  // Import des states nécessaires depuis le Context
  const { combatScreen, setCombatScreen } = useCombatContext();

  // Reset l'écran de Combat sur "presentation" au démontage (quand on quitte le mode Combat)
  useEffect(() => {
    return () => setCombatScreen("presentation");
  }, []);

  // Affichage des composants en fonction du State combatScreen
  if (combatScreen === "presentation") {
    return <PresentationCombat random={random} />;
  }

  if (combatScreen === "game") {
    return (
      <CombatGame
        inventory={inventory}
        setInventory={setInventory}
        moraCount={moraCount}
        setMoraCount={setMoraCount}
        random={random}
      />
    );
  }
}

Combat.propTypes = {
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
};
