import PropTypes from "prop-types";

function TradeMenu({ tradeScreen, handleClick }) {
  if (tradeScreen === "buy") {
    return (
      <div>
        <button onClick={handleClick} type="button" className="button">
          {" "}
          Next
        </button>
      </div>
    );
  }
}
TradeMenu.propTypes = {
  tradeScreen: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default TradeMenu;
