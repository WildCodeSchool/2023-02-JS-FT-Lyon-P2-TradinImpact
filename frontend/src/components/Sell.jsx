import { useState } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import Recap from "./Recap";
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
  random,
  selectedItem,
  setSelectedItem,
  showRecap,
  setShowRecap,
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

  const [isItemSelected, setIsItemSelected] = useState(false);
  /* Le composant Sell affiche par défaut l'écran d'inventaire. Si un item est sélectionné dans l'inventaire, le state "isItemSelected" passe à true  et l'écran Sell affiche le menu de vente */
  /* Si le bouton Sell est cliqué dans le tradeMenu, la modale de confirmation s'affiche */
  return isItemSelected ? (
    <div className={styles.display}>
      {showModal ? (
        <ConfirmationModal
          inventory={inventory}
          setInventory={setInventory}
          setTradeScreen={setTradeScreen}
          tradeScreen={tradeScreen}
          setShowModal={setShowModal}
          setShowRecap={setShowRecap}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : null}
      {showRecap ? (
        <Recap
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowRecap={setShowRecap}
        />
      ) : null}
      <TradeMerchantText tradeScreen={tradeScreen} itemPrice={itemPrice} />
      <TradeItemDisplay tradeScreen={tradeScreen} selectedItem={selectedItem} />
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
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
};
