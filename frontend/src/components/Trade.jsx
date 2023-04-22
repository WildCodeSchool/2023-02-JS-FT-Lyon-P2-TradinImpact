import { useState } from "react";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade() {
  const [tradeScreen, setTradeScreen] = useState("presentation");

  const random = (min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1)) + min;
  };

  if (tradeScreen === "presentation") {
    return (
      <PresentationTrade
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
      />
    );
  }
  if (tradeScreen === "sell") {
    return <Sell tradeScreen={tradeScreen} setTradeScreen={setTradeScreen} />;
  }
  if (tradeScreen === "buy") {
    return (
      <Buy
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        random={random}
      />
    );
  }
}
