import PropTypes from "prop-types";
import { createContext, useState, useMemo, useContext } from "react";

const CombatContext = createContext();

export default CombatContext;

export function CombatContextProvider({ children }) {
  // States du mode Combat
  const [combatScreen, setCombatScreen] = useState("presentation");
  // Pierre Feuille Ciseaux
  const [playerChoice, setPlayerChoice] = useState("");
  const [enemyChoice, setEnemyChoice] = useState("");
  const [result, setResult] = useState(null);
  // Calcul des PV et désignation du vainqueur
  const [enemyHP, setEnemyHP] = useState(10);
  const [playerHP, setPlayerHP] = useState(10);
  const [matchWinner, setMatchWinner] = useState(null);
  const [showCombatResultModal, setShowCombatResultModal] = useState(false);
  const [moraLoss, setMoraLoss] = useState(null);
  // Génération de l'ennemi et de son portrait
  const [enemy, setEnemy] = useState(null);
  const [enemyPortrait, setEnemyPortrait] = useState(null);

  // Memo pour optimisation => empêche les rerenders intempestifs au moindre changement de state
  //  - Passer les getter et setter de vos states entre les accolades, et le getter dans le tableau
  //    de dépendances
  const value = useMemo(
    () => ({
      enemy,
      setEnemy,
      enemyPortrait,
      setEnemyPortrait,
      combatScreen,
      setCombatScreen,
      playerChoice,
      setPlayerChoice,
      enemyChoice,
      setEnemyChoice,
      result,
      setResult,
      enemyHP,
      setEnemyHP,
      playerHP,
      setPlayerHP,
      matchWinner,
      setMatchWinner,
      showCombatResultModal,
      setShowCombatResultModal,
      moraLoss,
      setMoraLoss,
    }),
    [
      combatScreen,
      playerChoice,
      enemyChoice,
      result,
      enemyHP,
      playerHP,
      matchWinner,
      showCombatResultModal,
      enemy,
      enemyPortrait,
      moraLoss,
    ]
  );

  return (
    <CombatContext.Provider value={value}>{children}</CombatContext.Provider>
  );
}

// Custom hook à utiliser dans vos imports de Context
export const useCombatContext = () => useContext(CombatContext);

CombatContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
