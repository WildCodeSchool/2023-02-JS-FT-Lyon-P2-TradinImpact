import PropTypes from "prop-types";
import styles from "./PresentationTrade.module.css";

export default function PresentationTrade({ setTradeScreen, setItemQuantity }) {
  setItemQuantity(1);
  return (
    <div className={styles.presTrade}>
      <div className={styles.presTradeInfo}>
        <h3>Buy or sell items !</h3>
        <br />
        <p>
          You can also try and bargain prices up to 25 %, but it's not
          guaranteed to work everytime...
        </p>
      </div>
      <div>
        <button
          type="button"
          className={styles.presTradeBtn}
          onClick={() => setTradeScreen("buy")}
        >
          Buy
        </button>
        <button
          type="button"
          className={styles.presTradeBtn}
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
  setItemQuantity: PropTypes.func.isRequired,
};
