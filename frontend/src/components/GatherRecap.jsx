import { useGatherContext } from "../contexts/GatherContext";
import styles from "./GatherRecap.module.css";

export default function GatherRecap() {
  // Import du context
  const { setGatherScreen, setStartCooldown } = useGatherContext();
  // Au clic du bouton Close, on affiche le cooldown et on démarre le timer
  const handleClick = () => {
    setGatherScreen("cooldown");
    setStartCooldown(true);
  };

  return (
    <div className={styles.gatherRecapBackground}>
      <div className={styles.gatherRecap}>
        <p>You managed to gather *itemsGathered.length* items :</p>
        <div>
          *itemsGathered.map(item → (item.image) (item.name) x (item.count))*
        </div>
        <button type="button" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
}
