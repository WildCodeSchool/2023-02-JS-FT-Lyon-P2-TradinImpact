import PropTypes from "prop-types";
import Trade from "./Trade";

export default function GameScreen({ gameMode, inventory, setInventory }) {
  return (
    <>
      <h1>GameScreen</h1>
      {gameMode === "trade" ? (
        <Trade inventory={inventory} setInventory={setInventory} />
      ) : null}
    </>
  );
}

GameScreen.propTypes = {
  gameMode: PropTypes.string.isRequired,
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
};
