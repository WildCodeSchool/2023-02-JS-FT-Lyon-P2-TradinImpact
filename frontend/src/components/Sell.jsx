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
import BargainFailure from "./BargainFailure";
import TradeQuantityModal from "./TradeQuantityModal";
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
  showBargainFailure,
  setShowBargainFailure,
  moraCount,
  setMoraCount,
  itemPrice,
  setItemPrice,
  portrait,
  setPortrait,
  merchantName,
  setMerchantName,
  merchants,
  setBuyOrSell,
  itemQuantity,
  setItemQuantity,
  playerBet,
  setPlayerBet,
}) {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  let randomMerchant = null;
  const randomizeMerchant = () => {
    const randomMerchantIndex = random(0, merchants.length - 1);
    randomMerchant = merchants[randomMerchantIndex];
    setMerchantName(randomMerchant);
    setPortrait(
      `https://api.genshin.dev/characters/${randomMerchant}/portrait`
    );
  };
  useEffect(() => {
    setSelectedItem(null);
    randomizeMerchant();
  }, []);

  // le useEffect permet la détermination d'une fourchette de prix de l'item à vendre en fonction de sa rareté
  useEffect(() => {
    if (selectedItem != null) {
      const itemRarity = selectedItem.rarity;

      const getPrice = (rarity) => {
        if (rarity === undefined) {
          setItemPrice(random(15, 25));
        } else if (rarity === 1) {
          setItemPrice(random(20, 30));
        } else if (rarity === 2) {
          setItemPrice(random(25, 35));
        } else if (rarity === 3) {
          setItemPrice(random(35, 45));
        } else {
          setItemPrice(random(45, 55));
        }
      };
      getPrice(itemRarity);
    }
  }, [selectedItem]);

  /* Le composant Sell affiche par défaut l'écran d'inventaire. Si un item est sélectionné dans l'inventaire, le state "isItemSelected" passe à true  et l'écran Sell affiche le menu de vente */
  /* Si le bouton Sell est cliqué dans le tradeMenu, la modale de confirmation s'affiche */
  if (isItemSelected) {
    return (
      <div className={styles.display}>
        {showBargainModal ? (
          <BargainModal
            tradeScreen={tradeScreen}
            setTradeScreen={setTradeScreen}
            setShowBargainModal={setShowBargainModal}
            showBargainFailure={showBargainFailure}
            setShowBargainFailure={setShowBargainFailure}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setShowRecap={setShowRecap}
            itemPrice={itemPrice}
            setItemPrice={setItemPrice}
            inventory={inventory}
            setInventory={setInventory}
            moraCount={moraCount}
            setMoraCount={setMoraCount}
            random={random}
            randomizeMerchant={randomizeMerchant}
            itemQuantity={itemQuantity}
            playerBet={playerBet}
            setPlayerBet={setPlayerBet}
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
            itemQuantity={itemQuantity}
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
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            playerBet={playerBet}
            setPlayerBet={setPlayerBet}
            showEndModal={showEndModal}
            setShowEndModal={setShowEndModal}
            moraCount={moraCount}
          />
        ) : null}
        {showBargainFailure ? (
          <BargainFailure
            showBargainFailure={showBargainFailure}
            setShowBargainFailure={setShowBargainFailure}
            tradeScreen={tradeScreen}
            setTradeScreen={setTradeScreen}
            merchantName={merchantName}
            setBuyOrSell={setBuyOrSell}
          />
        ) : null}
        <TradeMerchantText
          tradeScreen={tradeScreen}
          itemPrice={itemPrice}
          selectedItem={selectedItem}
          itemQuantity={itemQuantity}
        />
        <TradeItemDisplay
          tradeScreen={tradeScreen}
          selectedItem={selectedItem}
          itemQuantity={itemQuantity}
        />
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
    );
  }
  if (isItemSelected === false) {
    return (
      <div className={styles.display}>
        <TradeInventory
          setIsItemSelected={setIsItemSelected}
          inventory={inventory}
          setInventory={setInventory}
          setTradeScreen={setTradeScreen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowQuantityModal={setShowQuantityModal}
        />
        {showQuantityModal ? (
          <TradeQuantityModal
            setShowQuantityModal={setShowQuantityModal}
            setItemQuantity={setItemQuantity}
            selectedItem={selectedItem}
            setIsItemSelected={setIsItemSelected}
          />
        ) : null}
      </div>
    );
  }
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
  showBargainFailure: PropTypes.bool.isRequired,
  setShowBargainFailure: PropTypes.func.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
  setItemPrice: PropTypes.func.isRequired,
  portrait: PropTypes.string.isRequired,
  setPortrait: PropTypes.func.isRequired,
  merchantName: PropTypes.string.isRequired,
  setMerchantName: PropTypes.func.isRequired,
  merchants: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setBuyOrSell: PropTypes.func.isRequired,
  itemQuantity: PropTypes.string.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  playerBet: PropTypes.string.isRequired,
  setPlayerBet: PropTypes.func.isRequired,
};
