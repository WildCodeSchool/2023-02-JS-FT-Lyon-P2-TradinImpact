import PropTypes from "prop-types";
import styles from "./TradeMenu.module.css";

function TradeMenu({
  tradeScreen,
  setTradeScreen,
  setSelectedItem,
  setShowModal,
  handleClick,
}) {
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
        <button onClick={handleClick} type="button" className={styles.button}>
          Next
        </button>
      ) : null}
      <button
        type="button"
        onClick={() => {
          setTradeScreen("presentation");
          setSelectedItem(null);
        }}
        className={styles.button}
      >
        Cancel
      </button>
    </div>
  );
}
TradeMenu.propTypes = {
  setSelectedItem: PropTypes.func.isRequired,
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default TradeMenu;
