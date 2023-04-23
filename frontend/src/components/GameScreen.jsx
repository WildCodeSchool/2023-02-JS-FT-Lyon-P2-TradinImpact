import PropTypes from "prop-types";
import Trade from "./Trade";
import styles from "./GameScreen.module.css";

export default function GameScreen({ gameMode, inventory, setInventory }) {
  return (
    <div className={styles.gamescreenTrade}>
      {gameMode === "trade" ? (
        <Trade inventory={inventory} setInventory={setInventory} />
      ) : null}
    </div>
  );
}

GameScreen.propTypes = {
  gameMode: PropTypes.string.isRequired,
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
};
