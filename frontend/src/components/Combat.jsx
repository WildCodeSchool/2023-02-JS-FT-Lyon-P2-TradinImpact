import { useEffect } from "react";
import { useCombatContext } from "../contexts/CombatContext";
import PresentationCombat from "./PresentationCombat";

export default function Combat() {
  // Import des states nécessaires depuis le Context
  const { combatScreen, setCombatScreen } = useCombatContext();

  // Reset l'écran de Combat sur "presentation" au démontage (quand on quitte le mode Combat)
  useEffect(() => {
    return () => setCombatScreen("presentation");
  }, []);

  // Affichage des composants en fonction du State combatScreen
  return combatScreen === "presentation" && <PresentationCombat />;
}
