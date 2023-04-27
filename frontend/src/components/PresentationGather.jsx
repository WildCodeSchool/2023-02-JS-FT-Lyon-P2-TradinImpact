import { useGatherContext } from "../contexts/GatherContext";
import styles from "./PresentationGather.module.css";

export default function PresentationGather() {
  // Import du contexte
  const { gatherScreen, setGatherScreen, cooldownGather } = useGatherContext();

  if (gatherScreen === "presentation" && cooldownGather === 90) {
    return (
      <div className={styles.presentationGather}>
        <div>
          Press <span>Start</span> to collect items from the wild
        </div>
        <button type="button" onClick={() => setGatherScreen("test")}>
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
