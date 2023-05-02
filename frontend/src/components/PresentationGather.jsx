import { useGatherContext } from "../contexts/GatherContext";
import styles from "./PresentationGather.module.css";

export default function PresentationGather() {
  // Import du contexte
  const { gatherScreen, setGatherScreen, cooldownGather } = useGatherContext();

  if (gatherScreen === "presentation" && cooldownGather.started === false) {
    return (
      <div className={styles.presentationGather}>
        <div>
          Press <span>Start</span> to collect items from the wild.
          <br /> <br />
          Tap the items enough times to add them to your basket.
          <br />
          Beware the{" "}
          <img
            src="https://api.genshin.dev/materials/local-specialties/wolfhook"
            alt="wolfhook"
          />
        </div>
        <button type="button" onClick={() => setGatherScreen("game")}>
          Start
        </button>
      </div>
    );
  }

  if (
    gatherScreen === "cooldown" ||
    (gatherScreen === "presentation" && cooldownGather.started === true)
  ) {
    return (
      <div className={styles.presentationGather}>
        <div>Try again in {cooldownGather.time}s</div>
      </div>
    );
  }
}
