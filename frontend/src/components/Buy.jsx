import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Buy.module.css";

function Buy({ tradeScreen, setTradeScreen, showModal, setShowModal }) {
  return (
    <div className={styles.display}>
      {showModal ? (
        <ConfirmationModal
          tradeScreen={tradeScreen}
          setShowModal={setShowModal}
        />
      ) : null}
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default Buy;

Buy.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
