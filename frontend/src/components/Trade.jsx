import { useState } from "react";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade() {
  const [tradeScreen, setTradeScreen] = useState("presentation");
  const [selectedItem, setSelectedItem] = useState(null);

  const random = (min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1)) + min;
  };
  const [showModal, setShowModal] = useState(false);

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
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        random={random}
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
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    );
  }
}
