import PropTypes from "prop-types";
import { useState } from "react";
import PresentationGather from "./PresentationGather";
import GatherRecap from "./GatherRecap";

export default function Gather({
  startCooldown,
  setStartCooldown,
  cooldownGather,
  setCooldownGather,
}) {
  const [gatherScreen, setGatherScreen] = useState("presentation");
  // const [startCooldown, setStartCooldown] = useState(false);

  if (gatherScreen === "presentation" || gatherScreen === "cooldown") {
    return (
      <PresentationGather
        gatherScreen={gatherScreen}
        setGatherScreen={setGatherScreen}
        startCooldown={startCooldown}
        cooldownGather={cooldownGather}
        setCooldownGather={setCooldownGather}
        setStartCooldown={setStartCooldown}
      />
    );
  }
  if (gatherScreen === "recap") {
    return (
      <GatherRecap
        setGatherScreen={setGatherScreen}
        setStartCooldown={setStartCooldown}
      />
    );
  }
}

Gather.propTypes = {
  cooldownGather: PropTypes.number.isRequired,
  setCooldownGather: PropTypes.func.isRequired,
  startCooldown: PropTypes.bool.isRequired,
  setStartCooldown: PropTypes.func.isRequired,
};
