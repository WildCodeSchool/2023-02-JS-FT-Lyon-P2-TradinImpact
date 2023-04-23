import { useState } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import TradeInventory from "./TradeInventory";
import styles from "./Sell.module.css";

function Sell({
  inventory,
  setInventory,
  tradeScreen,
  setTradeScreen,
  showModal,
  setShowModal,
  selectedItem,
  setSelectedItem,
}) {
  const [isItemSelected, setIsItemSelected] = useState(false);

  return isItemSelected ? (
    <div className={styles.display}>
      {showModal ? (
        <ConfirmationModal
          inventory={inventory}
          setInventory={setInventory}
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowModal={setShowModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : null}
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu
        setSelectedItem={setSelectedItem}
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
      />
    </div>
  ) : (
    <TradeInventory
      setIsItemSelected={setIsItemSelected}
      inventory={inventory}
      setInventory={setInventory}
      setTradeScreen={setTradeScreen}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    />
  );
}

Sell.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
};

export default Sell;

Sell.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};
