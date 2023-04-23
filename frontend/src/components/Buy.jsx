import { useState } from "react";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import Recap from "./Recap";
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
  showRecap,
  setShowRecap,
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
  const handleClick = () => {
    randomIndex = random(0, merchantItems.length - 1);
    setObjectName(merchantItems[randomIndex]);
  };

  /* Il va falloir créer une requête pour récupérer l'objet aléatoire, et l'enregistrer sous le state selectedItem */

  /* Ici viendra la fonction permettant de calculer le prix de l'item 
 généré aléatoirement en fonction de sa rareté, prix que l'on passera à TradeMerchantText
TradeItemDisplay via les props */

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
      <TradeItemDisplay tradeScreen={tradeScreen} objectName={objectName} />
      <Merchant />
      <TradeMenu
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
        handleClick={handleClick}
      />
    </div>
  );
}
Buy.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
};
