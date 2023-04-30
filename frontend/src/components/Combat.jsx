import { useEffect } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import PresentationCombat from "./PresentationCombat";
import CombatGame from "./CombatGame";

export default function Combat() {
  // Import des states nécessaires depuis le Context
  const { combatScreen, setCombatScreen } = useCombatContext();

  // Reset l'écran de Combat sur "presentation" au démontage (quand on quitte le mode Combat)
  useEffect(() => {
    return () => setCombatScreen("presentation");
  }, []);

  // Affichage des composants en fonction du State combatScreen
  if (combatScreen === "presentation") {
    return <PresentationCombat />;
  }

  if (combatScreen === "game") {
    return <CombatGame />;
  }
}
