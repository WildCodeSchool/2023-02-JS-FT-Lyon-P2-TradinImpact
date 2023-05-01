import { useEffect } from "react";
import PropTypes from "prop-types";
import { useCombatContext } from "../contexts/CombatContext";
import PresentationCombat from "./PresentationCombat";
import CombatGame from "./CombatGame";

export default function Combat({
  // inventory,
  // setInventory,
  // moraCount,
  // setMoraCount,
  random,
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
    return <CombatGame />;
  }
}

Combat.propTypes = {
  random: PropTypes.func.isRequired,
  // setInventory: PropTypes.func.isRequired,
  // inventory: PropTypes.arrayOf.isRequired,
  // setMoraCount: PropTypes.func.isRequired,
  // moraCount: PropTypes.number.isRequired,
};
