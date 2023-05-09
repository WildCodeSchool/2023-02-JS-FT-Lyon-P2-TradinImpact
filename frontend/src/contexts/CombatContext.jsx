import PropTypes from "prop-types";
import { createContext, useState, useMemo, useContext } from "react";

const CombatContext = createContext();

export default CombatContext;

const defaultCooldownTime = 90;

export function CombatContextProvider({ children }) {
  // States du mode Combat
  const [combatScreen, setCombatScreen] = useState("presentation");
  // Pierre Feuille Ciseaux
  const [playerChoice, setPlayerChoice] = useState("");
  const [enemyChoice, setEnemyChoice] = useState("");
  const [result, setResult] = useState(null);
  /* Sert à stocker la valeur du résultat du match pour le bargain car avec le state result initial,
  la valeur est reset au bout de 2sec */
  const [bargainResult, setBargainResult] = useState("");
  // Calcul des PV et désignation du vainqueur
  const [enemyHP, setEnemyHP] = useState(10);
  const [playerHP, setPlayerHP] = useState(10);
  const [matchWinner, setMatchWinner] = useState(null);
  const [showCombatResultModal, setShowCombatResultModal] = useState(false);
  const [moraLoss, setMoraLoss] = useState(null);
  const [ouch, setOuch] = useState(null);
  // Génération de l'ennemi et de son portrait
  const [enemy, setEnemy] = useState(null);
  const [enemyPortrait, setEnemyPortrait] = useState(null);
  // Cooldown
  const [cooldownCombat, setCooldownCombat] = useState({
    started: false,
    time: defaultCooldownTime,
  });

  const coolDownCombatBegin = () => {
    /* quand on lance le cooldown, on l'affiche de suite
    sinon il s'affiche 1 seconde après le click et est visible 1 secondes après le lancement
    (est visible à partir de 9 secondes pour un CD à 10 secondes ) */
    setCooldownCombat({
      started: true,
      time: defaultCooldownTime,
    });
    const cooldown = setInterval(() => {
      setCooldownCombat((prev) => {
        /* quand on est à 1, la prochaine fois on sera a 0 donc on doit anticiper le clear du cool down quand on sera à 0 */
        if (prev.time === 1) {
          clearInterval(cooldown);
          setCombatScreen("presentation");
          return {
            started: false,
            time: defaultCooldownTime,
          };
        }
        return { started: true, time: prev.time - 1 };
      });
    }, 1000);
  };

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
      ouch,
      setOuch,
      cooldownCombat,
      setCooldownCombat,
      coolDownCombatBegin,
      bargainResult,
      setBargainResult,
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
      ouch,
      cooldownCombat,
      bargainResult,
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
