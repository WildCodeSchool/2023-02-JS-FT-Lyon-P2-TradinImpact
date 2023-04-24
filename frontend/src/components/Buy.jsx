import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import Recap from "./Recap";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Buy.module.css";

export default function Buy({
  inventory,
  setInventory,
  random,
  tradeScreen,
  setTradeScreen,
  setShowModal,
  showModal,
  selectedItem,
  setSelectedItem,
  showRecap,
  setShowRecap,
  moraCount,
  setMoraCount,
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

  const [portrait, setPortrait] = useState("aloy");
  const merchants = ["aloy", "amber", "barbara", "diluc", "bennett", "xiao"];
  let randomMerchant = null;
  const randomizeMerchant = () => {
    const randomMerchantIndex = random(0, merchants.length - 1);
    randomMerchant = merchants[randomMerchantIndex];
    setPortrait(
      `https://api.genshin.dev/characters/${randomMerchant}/portrait`
    );
  };
  let itemPrice = 0;
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
        handleClick={handleClick}
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
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
};
