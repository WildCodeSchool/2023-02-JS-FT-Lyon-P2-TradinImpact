import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import Recap from "./Recap";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Buy.module.css";
import BargainModal from "./BargainModal";
import BargainFailure from "./BargainFailure";

export default function Buy({
  inventory,
  setInventory,
  random,
  tradeScreen,
  setTradeScreen,
  setShowModal,
  showModal,
  showBargainModal,
  setShowBargainModal,
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
}) {
  const merchantItems = [
    "flour",
    "almond",
    "cabbage",
    "fish",
    "crab",
    "milk",
    "pepper",
    "rice",
    "salt",
    "shrimp-meat",
    "butter",
    "cream",
    "ham",
    "fowl",
    "smoked-fowl",
    "sugar",
    "bacon",
    "cheese",
    "crab-roe",
    "tofu",
    "jam",
    "sausage",
  ];

  const [portrait, setPortrait] = useState("albedo");
  const [merchantName, setMerchantName] = useState(null);
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
    setMerchantName(randomMerchant);
    setPortrait(
      `https://api.genshin.dev/characters/${randomMerchant}/portrait`
    );
  };
  const randomizeItem = () => {
    const randomItemIndex = random(0, merchantItems.length - 1);
    fetch("https://api.genshin.dev/materials/cooking-ingredients/")
      .then((response) => response.json())
      .then((data) => setSelectedItem(data[merchantItems[randomItemIndex]]));
  };

  /* Randomisation du marchand et de l'item qu'il vend au montage du composant */
  useEffect(() => {
    randomizeMerchant();
    randomizeItem();
  }, []);

  /* Randomisation de l'item et du marchand au clic sur le bouton Next */

  const handleClick = () => {
    randomizeMerchant();
    randomizeItem();
  };

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
          handleClick={handleClick}
          portrait={portrait}
        />
      ) : null}
      {showModal ? (
        <ConfirmationModal
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowModal={setShowModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowRecap={setShowRecap}
          itemPrice={itemPrice}
          inventory={inventory}
          setInventory={setInventory}
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
      {showBargainFailure ? (
        <BargainFailure
          showBargainFailure={showBargainFailure}
          setShowBargainFailure={setShowBargainFailure}
          merchantName={merchantName}
          setTradeScreen={setTradeScreen}
        />
      ) : null}
      <TradeMerchantText
        tradeScreen={tradeScreen}
        itemPrice={itemPrice}
        selectedItem={selectedItem}
      />
      {selectedItem && (
        <TradeItemDisplay
          tradeScreen={tradeScreen}
          selectedItem={selectedItem}
          // objectName={objectName}
        />
      )}
      <Merchant portrait={portrait} />
      <TradeMenu
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
        showBargainModal={showBargainModal}
        setShowBargainModal={setShowBargainModal}
        handleClick={handleClick}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        moraCount={moraCount}
        itemPrice={itemPrice}
      />
    </div>
  );
}
Buy.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showBargainModal: PropTypes.bool.isRequired,
  setShowBargainModal: PropTypes.func.isRequired,
  showBargainFailure: PropTypes.bool.isRequired,
  setShowBargainFailure: PropTypes.func.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
  setItemPrice: PropTypes.func.isRequired,
};
