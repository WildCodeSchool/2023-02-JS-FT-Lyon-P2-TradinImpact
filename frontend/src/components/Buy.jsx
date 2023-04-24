import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Buy.module.css";

export default function Buy({
  random,
  tradeScreen,
  setTradeScreen,
  setShowModal,
  showModal,
  selectedItem,
  setSelectedItem,
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

  let randomIndex = random(0, merchantItems.length - 1);
  const [objectName, setObjectName] = useState(merchantItems[randomIndex]);
  /* const [objectInfo, setObjectInfo] = useState(null); */

  const handleClick = () => {
    randomIndex = random(0, merchantItems.length - 1);
    setObjectName(merchantItems[randomIndex]);
  };
  useEffect(() => {
    fetch("https://api.genshin.dev/materials/cooking-ingredients/")
      .then((response) => response.json())

      .then((data) => setSelectedItem(data[objectName]));
  }, [objectName]);

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
          setShowModal={setShowModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ) : null}
      <TradeMerchantText tradeScreen={tradeScreen} itemPrice={itemPrice} />
      <TradeItemDisplay tradeScreen={tradeScreen} objectName={objectName} />
      <Merchant />
      <TradeMenu
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
        handleClick={handleClick}
        selectedItem={selectedItem}
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
};
