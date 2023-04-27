import PropTypes from "prop-types";
import { createContext, useMemo, useState, useContext } from "react";

const GatherContext = createContext();

export default GatherContext;

export function GatherContextProvider({ children }) {
  const [gatherScreen, setGatherScreen] = useState("presentation");
  // const [startCooldown, setStartCooldown] = useState(false);
  const [cooldownGather, setCooldownGather] = useState(90);

  const coolDownBegin = () => {
    const cooldown = setInterval(() => {
      // console.log(cooldownGather);
      if (cooldownGather === 0) {
        clearInterval(cooldown);
        // setStartCooldown(false);
        setGatherScreen("presentation");
        setCooldownGather(90);
      } else {
        setCooldownGather((prev) => prev + 1);
        // console.log("+1");
      }
    }, 1000);
  };

  const value = useMemo(
    () => ({
      gatherScreen,
      setGatherScreen,
      // startCooldown,
      // setStartCooldown,
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
