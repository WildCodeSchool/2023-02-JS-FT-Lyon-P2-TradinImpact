import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";

function Buy() {
  return (
    <div>
      <h1>Buy</h1>
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu />
    </div>
  );
}

export default Buy;
