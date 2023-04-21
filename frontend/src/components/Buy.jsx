import PropTypes from "prop-types";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Buy.module.css";

function Buy({ setTradeScreen }) {
  return (
    <div className={styles.display}>
      <TradeMerchantText />
      <TradeItemDisplay />
      <Merchant />
      <TradeMenu setTradeScreen={setTradeScreen} />
    </div>
  );
}

export default Buy;

Buy.propTypes = {
  setTradeScreen: PropTypes.func.isRequired,
};
