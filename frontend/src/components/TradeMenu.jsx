import PropTypes from "prop-types";
import styles from "./TradeMenu.module.css";

function TradeMenu({
  tradeScreen,
  setTradeScreen,
  setSelectedItem,
  setShowModal,
  handleClick,
  moraCount,
  itemPrice,
}) {
  return (
    <div className={styles.background}>
      <button type="button" className={styles.button}>
        Bargain
      </button>
      <button
        type="button"
        disabled={moraCount < itemPrice}
        onClick={() => setShowModal(true)}
        className={styles.button}
      >
        {
          /* Le bouton Buy / Sell est généré en fonction du state tradeScreen */
          tradeScreen === "buy" ? "Buy" : "Sell"
        }
      </button>
      {tradeScreen === "buy" ? (
        /*  Le bouton Next est généré en fonction uniquement si le state tradeScreen est à "buy" */
        <button onClick={handleClick} type="button" className={styles.button}>
          Next
        </button>
      ) : null}
      <button
        type="button"
        onClick={() => {
          /*  Le bouton Cancel retourne au menu présentation et remet à null le state selectedItem */
          setSelectedItem(null);
          setTradeScreen("presentation");
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
  moraCount: PropTypes.number.isRequired,
  itemPrice: PropTypes.number.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default TradeMenu;
