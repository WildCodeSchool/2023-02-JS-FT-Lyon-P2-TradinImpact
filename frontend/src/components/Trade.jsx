import { useState } from "react";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade() {
  const [tradeScreen, setTradeScreen] = useState("presentation");
  const [showModal, setShowModal] = useState(false);
  const [showRecap, setShowRecap] = useState(false);

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
    return (
      <Sell
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        showModal={showModal}
        setShowModal={setShowModal}
        showRecap={showRecap}
        setShowRecap={setShowRecap}
      />
    );
  }
  if (tradeScreen === "buy") {
    return (
      <Buy
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        random={random}
        showModal={showModal}
        setShowModal={setShowModal}
        showRecap={showRecap}
        setShowRecap={setShowRecap}
      />
    );
  }
}
