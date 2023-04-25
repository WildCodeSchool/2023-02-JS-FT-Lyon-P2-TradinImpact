import PropTypes from "prop-types";
import styles from "./PresentationGather.module.css";

export default function PresentationGather({ setGatherScreen }) {
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

PresentationGather.propTypes = {
  setGatherScreen: PropTypes.func.isRequired,
};
