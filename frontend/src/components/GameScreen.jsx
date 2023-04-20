import PropTypes from "prop-types";
import Trade from "./Trade";

export default function GameScreen(props) {
  const { gameMode } = props;

  return (
    <>
      <h1>GameScreen</h1>
      {gameMode === "trade" ? <Trade /> : null}
    </>
  );
}

GameScreen.propTypes = {
  gameMode: PropTypes.string.isRequired,
};
