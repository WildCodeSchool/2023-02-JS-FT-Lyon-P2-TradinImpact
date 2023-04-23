import { useState } from "react";
import PropTypes from "prop-types";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade({ inventory, setInventory }) {
  const [tradeScreen, setTradeScreen] = useState("presentation");

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
      />
    );
  }
  if (tradeScreen === "buy") {
    return (
      <Buy
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setInventory={setInventory}
      />
    );
  }
}

Trade.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
};
