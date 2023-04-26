// import PropTypes from "prop-types";
import { useEffect } from "react";
import { useGatherContext } from "../contexts/GatherContext";
import styles from "./PresentationGather.module.css";

export default function PresentationGather() {
  // Import du contexte
  const {
    gatherScreen,
    setGatherScreen,
    startCooldown,
    setStartCooldown,
    cooldownGather,
    setCooldownGather,
  } = useGatherContext();

  // Lance le cooldown une fois la modal de recap fermée
  useEffect(() => {
    if (startCooldown === true) {
      const countdown = setTimeout(
        () => setCooldownGather(cooldownGather - 1),
        1000
      );
      // Reset les différents states à la fin du cooldown
      if (cooldownGather === 0) {
        clearTimeout(countdown);
        setStartCooldown(false);
        setGatherScreen("presentation");
        setCooldownGather(90);
      }
    }
  }, [cooldownGather]);

  if (gatherScreen === "presentation" && cooldownGather === 90) {
    return (
      <div className={styles.presentationGather}>
        <div>
          Press <span>Start</span> to collect items from the wild
        </div>
        <button type="button" onClick={() => setGatherScreen("game")}>
          Start
        </button>
      </div>
    );
  }

  if (
    gatherScreen === "cooldown" ||
    (gatherScreen === "presentation" && cooldownGather < 90)
  ) {
    return (
      <div className={styles.presentationGather}>
        <div>Try again in {cooldownGather}s</div>
      </div>
    );
  }
}
