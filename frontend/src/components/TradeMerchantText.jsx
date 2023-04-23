import PropTypes from "prop-types";
import styles from "./TradeMerchantText.module.css";

export default function TradeMerchantText({ tradeScreen }) {
  return (
    <div className={styles.merchantText}>
      {tradeScreen === "buy" ? (
        <h1>I'll sell you this item for /Many/ moras</h1>
      ) : (
        <h1>I'll buy this item for /Many/ moras</h1>
      )}
    </div>
  );
}

TradeMerchantText.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
};
