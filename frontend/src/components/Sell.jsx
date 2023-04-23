import { useState } from "react";
import PropTypes from "prop-types";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import TradeInventory from "./TradeInventory";

function Sell({ inventory, setInventory, setTradeScreen }) {
  const [isItemSelected, setIsItemSelected] = useState(false);

  return isItemSelected ? (
    <div>
      <h1>Sell</h1>
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu />
    </div>
  ) : (
    <TradeInventory
      setIsItemSelected={setIsItemSelected}
      inventory={inventory}
      setInventory={setInventory}
      setTradeScreen={setTradeScreen}
    />
  );
}

Sell.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
};

export default Sell;
