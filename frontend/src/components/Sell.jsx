import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import Recap from "./Recap";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import TradeInventory from "./TradeInventory";
import BargainModal from "./BargainModal";
import styles from "./Sell.module.css";

export default function Sell({
  inventory,
  setInventory,
  tradeScreen,
  setTradeScreen,
  showModal,
  setShowModal,
  showBargainModal,
  setShowBargainModal,
  random,
  selectedItem,
  setSelectedItem,
  showRecap,
  setShowRecap,
  moraCount,
  setMoraCount,
  itemPrice,
  setItemPrice,
}) {
  const [isItemSelected, setIsItemSelected] = useState(false);

  /* Randomisation du marchand au montage du composant */
  const [portrait, setPortrait] = useState("albedo");
  const merchants = [
    "albedo",
    "amber",
    "barbara",
    "diluc",
    "bennett",
    "jean",
    "ningguang",
    "ganyu",
    "tartaglia",
  ];

  let randomMerchant = null;
  const randomizeMerchant = () => {
    const randomMerchantIndex = random(0, merchants.length - 1);
    randomMerchant = merchants[randomMerchantIndex];
    setPortrait(
      `https://api.genshin.dev/characters/${randomMerchant}/portrait`
    );
  };
  useEffect(() => {
    randomizeMerchant();
  }, []);

  useEffect(() => {
    if (selectedItem != null) {
      const itemRarity = selectedItem.rarity;

      const getPrice = (rarity) => {
        if (rarity === undefined) {
          setItemPrice(random(15, 25));
        } else if (rarity === 2) {
          setItemPrice(random(25, 35));
        } else if (rarity === 3) {
          setItemPrice(random(35, 45));
        }
      };

      getPrice(itemRarity);
    }
  }, [selectedItem]);

  /* Le composant Sell affiche par défaut l'écran d'inventaire. Si un item est sélectionné dans l'inventaire, le state "isItemSelected" passe à true  et l'écran Sell affiche le menu de vente */
  /* Si le bouton Sell est cliqué dans le tradeMenu, la modale de confirmation s'affiche */
  return isItemSelected ? (
    <div className={styles.display}>
      {showBargainModal ? (
        <BargainModal
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowBargainModal={setShowBargainModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowRecap={setShowRecap}
          itemPrice={itemPrice}
          inventory={inventory}
          setInventory={setInventory}
          moraCount={moraCount}
          setMoraCount={setMoraCount}
          random={random}
        />
      ) : null}
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
          itemPrice={itemPrice}
          moraCount={moraCount}
          setMoraCount={setMoraCount}
        />
      ) : null}
      {showRecap ? (
        <Recap
          itemPrice={itemPrice}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowRecap={setShowRecap}
        />
      ) : null}
      <TradeMerchantText
        tradeScreen={tradeScreen}
        itemPrice={itemPrice}
        selectedItem={selectedItem}
      />
      <TradeItemDisplay tradeScreen={tradeScreen} selectedItem={selectedItem} />
      <Merchant portrait={portrait} />
      <TradeMenu
        setSelectedItem={setSelectedItem}
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
        showBargainModal={showBargainModal}
        setShowBargainModal={setShowBargainModal}
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
  tradeScreen: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showBargainModal: PropTypes.bool.isRequired,
  setShowBargainModal: PropTypes.func.isRequired,
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
  setItemPrice: PropTypes.func.isRequired,
};
