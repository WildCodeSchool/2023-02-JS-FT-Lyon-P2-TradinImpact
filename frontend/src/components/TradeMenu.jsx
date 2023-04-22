import PropTypes from "prop-types";
import styles from "./TradeMenu.module.css";

function TradeMenu({ tradeScreen, setTradeScreen, setShowModal }) {
  return (
    <div className={styles.background}>
      <button type="button" className={styles.button}>
        Bargain
      </button>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={styles.button}
      >
        {tradeScreen === "buy" ? "Buy" : "Sell"}
      </button>
      {tradeScreen === "buy" ? (
        <button type="button" className={styles.button}>
          Next
        </button>
      ) : null}
      <button
        type="button"
        onClick={() => setTradeScreen("presentation")}
        className={styles.button}
      >
        Cancel
      </button>
    </div>
  );
}

export default TradeMenu;

TradeMenu.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
