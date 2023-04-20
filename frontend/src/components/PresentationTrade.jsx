import "../styles/PresentationTrade.css";
import PropTypes from "prop-types";

export default function PresentationTrade(props) {
  const { setTradeScreen } = props;
  return (
    <div className="presTrade">
      <div className="info-trade">
        <p>What would you like to do ?</p>
      </div>
      <div>
        <button
          type="button"
          className="button-trade"
          onClick={() => setTradeScreen("buy")}
        >
          Buy
        </button>
        <button
          type="button"
          className="button-trade"
          onClick={() => setTradeScreen("sell")}
        >
          Sell
        </button>
      </div>
    </div>
  );
}

PresentationTrade.propTypes = {
  setTradeScreen: PropTypes.func.isRequired,
};
