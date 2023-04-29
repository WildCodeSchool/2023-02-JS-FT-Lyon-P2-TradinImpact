import { useCombatContext } from "../contexts/CombatContext";
import styles from "./PresentationCombat.module.css";

export default function PresentationCombat() {
  // Import des states nécessaires depuis le Context
  const { setCombatScreen } = useCombatContext();

  // Affichage de la modale de présentation et du bouton pour lancer le jeu
  return (
    <div className={styles.presentationCombat}>
      <div>
        Press <span>Start</span> to fight an evil monster
      </div>
      <button type="button" onClick={() => setCombatScreen("game")}>
        Start
      </button>
    </div>
  );
}
