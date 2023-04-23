import { useState } from "react";
import PropTypes from "prop-types";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade({ inventory, setInventory }) {
  const [tradeScreen, setTradeScreen] = useState("presentation");

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
        inventory={inventory}
        setInventory={setInventory}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    );
  }
  if (tradeScreen === "buy") {
    return (
      <Buy
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setInventory={setInventory}
        random={random}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    );
  }
}

Trade.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
};
