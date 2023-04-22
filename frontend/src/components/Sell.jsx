import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";

function Sell() {
  return (
    <div>
      <h1>Sell</h1>
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu />
    </div>
  );
}

export default Sell;
