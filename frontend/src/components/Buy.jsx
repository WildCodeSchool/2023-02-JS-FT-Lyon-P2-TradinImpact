/* import React, { useState } from "react"; */
import { useState } from "react";
import PropTypes from "prop-types";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";

export default function Buy({ random, tradeScreen, setTradeScreen }) {
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
  /* Ici viendra la fonction permettant de calculer le prix de l'item 
 généré aléatoirement en fonction de sa rareté, prix que l'on passera à TradeMerchantText
TradeItemDisplay via les props */
  return (
    <div>
      <h1>Buy</h1>
      <TradeMerchantText tradeScreen={tradeScreen} />
      <TradeItemDisplay tradeScreen={tradeScreen} objectName={objectName} />
      <Merchant />
      <TradeMenu
        tradeScreen={tradeScreen}
        handleClick={handleClick}
        setTradeScreen={setTradeScreen}
      />
    </div>
  );
}
Buy.propTypes = {
  random: PropTypes.func.isRequired,
  tradeScreen: PropTypes.func.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
};
