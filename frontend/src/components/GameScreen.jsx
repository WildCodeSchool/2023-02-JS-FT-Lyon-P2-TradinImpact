import PropTypes from "prop-types";
import Trade from "./Trade";
import styles from "./GameScreen.module.css";

export default function GameScreen({ gameMode }) {
  return (
    <div className={styles.gamescreenTrade}>
      {gameMode === "trade" ? <Trade /> : null}
    </div>
  );
}

GameScreen.propTypes = {
  gameMode: PropTypes.string.isRequired,
};
