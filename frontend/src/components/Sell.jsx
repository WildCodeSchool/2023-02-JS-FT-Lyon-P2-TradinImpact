import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";

function Sell() {
  return (
    <div>
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu />
    </div>
  );
}

export default Sell;
