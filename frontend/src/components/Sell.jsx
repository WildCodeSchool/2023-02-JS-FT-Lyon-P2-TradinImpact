import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
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
  random,
  selectedItem,
  setSelectedItem,
}) {
  let itemPrice = 0;

  if (selectedItem != null) {
    const itemRarity = selectedItem.rarity;

    const getPrice = (rarity) => {
      if (rarity === undefined) {
        itemPrice = random(15, 25);
      } else if (rarity === 2) {
        itemPrice = random(25, 35);
      } else if (rarity === 3) {
        itemPrice = random(35, 45);
      }
    };

    getPrice(itemRarity);
  }

  return (
    <div className={styles.display}>
      {showModal ? (
        <ConfirmationModal
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowModal={setShowModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : null}
      <TradeMerchantText itemPrice={itemPrice} />
      <TradeItemDisplay selectedItem={selectedItem} />
      <Merchant />
      <TradeMenu
        setSelectedItem={setSelectedItem}
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
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
};
