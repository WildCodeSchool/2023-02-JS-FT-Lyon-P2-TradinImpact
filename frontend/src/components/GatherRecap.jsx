import PropTypes from "prop-types";
import styles from "./GatherRecap.module.css";

export default function GatherRecap({ setGatherScreen, setStartCooldown }) {
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

GatherRecap.propTypes = {
  setGatherScreen: PropTypes.func.isRequired,
  setStartCooldown: PropTypes.func.isRequired,
};
