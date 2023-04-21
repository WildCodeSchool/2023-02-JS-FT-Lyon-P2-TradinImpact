import PropTypes from "prop-types";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Sell.module.css";

function Sell({ setTradeScreen }) {
  return (
    <div className={styles.display}>
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu setTradeScreen={setTradeScreen} />
    </div>
  );
}

export default Sell;

Sell.propTypes = {
  setTradeScreen: PropTypes.func.isRequired,
};
