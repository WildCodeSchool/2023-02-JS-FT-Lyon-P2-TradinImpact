import { useState } from "react";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade() {
  const [tradeScreen, setTradeScreen] = useState("presentation");

  const processedItems = [
    "chilled-meat",
    "flour",
    "milk",
    "pepper",
    "rice",
    "salt",
    "shrimp-meat",
    "butter",
    "cream",
    "ham",
    "smoked-fowl",
    "sugar",
    "bacon",
    "cheese",
    "crab-roe",
    "jam",
    "sausage",
  ];

  /*   function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } */

  if (tradeScreen === "presentation") {
    return (
      <PresentationTrade
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
      />
    );
  }
  if (tradeScreen === "buy") {
    return <Buy processedItems={processedItems} />;
  }
  return <Sell />;
}
