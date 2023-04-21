import PropTypes from "prop-types";
import styles from "./TradeMenu.module.css";

function TradeMenu({ setTradeScreen }) {
  return (
    <div className={styles.background}>
      <button type="button" className={styles.button}>
        Bargain
      </button>
      <button type="button" className={styles.button}>
        Buy
      </button>
      <button type="button" className={styles.button}>
        Next
      </button>
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
  setTradeScreen: PropTypes.func.isRequired,
};
