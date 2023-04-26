import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./PresentationGather.module.css";

export default function PresentationGather({
  gatherScreen,
  setGatherScreen,
  startCooldown,
  cooldownGather,
  setCooldownGather,
  setStartCooldown,
}) {
  // Lance le cooldown une fois la modal de recap fermée
  useEffect(() => {
    if (startCooldown === true) {
      const countdown = setTimeout(
        () => setCooldownGather(cooldownGather - 1),
        1000
      );
      // Reset les différents states à la fin du timer
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
        <button type="button" onClick={() => setGatherScreen("recap")}>
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

PresentationGather.propTypes = {
  gatherScreen: PropTypes.string.isRequired,
  setGatherScreen: PropTypes.func.isRequired,
  startCooldown: PropTypes.bool.isRequired,
  cooldownGather: PropTypes.number.isRequired,
  setCooldownGather: PropTypes.func.isRequired,
  setStartCooldown: PropTypes.func.isRequired,
};
