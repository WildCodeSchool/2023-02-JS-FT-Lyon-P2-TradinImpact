import PropTypes from "prop-types";
import styles from "./PresentationTrade.module.css";

export default function PresentationTrade({ setTradeScreen }) {
  return (
    <div className={styles.presTrade}>
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
