import PropTypes from "prop-types";
import { createContext, useMemo, useState, useContext } from "react";

const GatherContext = createContext();

export default GatherContext;

const defaultCooldownTime = 5;

export function GatherContextProvider({ children }) {
  const [gatherScreen, setGatherScreen] = useState("presentation");
  const [cooldownGather, setCooldownGather] = useState({
    started: false,
    time: defaultCooldownTime,
  });

  const coolDownBegin = () => {
    /* quand on lance le cooldown, on l'affiche de suite
    sinon il s'affiche 1 seconde après le click et est visible 1 secondes après le lancement
    (est visible à partir de 9 secondes pour un CD à 10 secondes ) */
    setCooldownGather({
      started: true,
      time: defaultCooldownTime,
    });
    const cooldown = setInterval(() => {
      setCooldownGather((prev) => {
        /* quand on est à 1, la prochaine fois on sera a 0 donc on doit anticiper le clear du cool down quand on sera à 0 */
        if (prev.time === 1) {
          clearInterval(cooldown);
          setGatherScreen("presentation");
          return {
            started: false,
            time: defaultCooldownTime,
          };
        }
        return { started: true, time: prev.time - 1 };
      });
    }, 1000);
  };

  const value = useMemo(
    () => ({
      gatherScreen,
      setGatherScreen,
      cooldownGather,
      setCooldownGather,
      coolDownBegin,
    }),
    [gatherScreen, cooldownGather]
  );

  return (
    <GatherContext.Provider value={value}>{children}</GatherContext.Provider>
  );
}

// Custom hook
export const useGatherContext = () => useContext(GatherContext);

GatherContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
