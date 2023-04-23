import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import Recap from "./Recap";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Sell.module.css";

function Sell({
  tradeScreen,
  setTradeScreen,
  showModal,
  setShowModal,
  showRecap,
  setShowRecap,
}) {
  return (
    <div className={styles.display}>
      {showModal ? (
        <ConfirmationModal
          tradeScreen={tradeScreen}
          setShowModal={setShowModal}
          setShowRecap={setShowRecap}
        />
      ) : null}
      {showRecap ? (
        <Recap
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowRecap={setShowRecap}
        />
      ) : null}
      <TradeMerchantText tradeScreen={tradeScreen} />
      <TradeItemDisplay tradeScreen={tradeScreen} />
      <Merchant />
      <TradeMenu
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default Sell;

Sell.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
};
