import PropTypes from "prop-types";
import { createContext, useMemo, useState, useContext } from "react";

const GatherContext = createContext();

export default GatherContext;

export function GatherContextProvider({ children }) {
  const [gatherScreen, setGatherScreen] = useState("presentation");
  const [startCooldown, setStartCooldown] = useState(false);
  const [cooldownGather, setCooldownGather] = useState(90);

  const value = useMemo(
    () => ({
      gatherScreen,
      setGatherScreen,
      startCooldown,
      setStartCooldown,
      cooldownGather,
      setCooldownGather,
    }),
    [gatherScreen, startCooldown, cooldownGather]
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
