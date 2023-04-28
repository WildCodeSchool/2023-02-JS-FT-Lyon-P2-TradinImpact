import PropTypes from "prop-types";
import styles from "./TradeMerchantText.module.css";

export default function TradeMerchantText({ tradeScreen, itemPrice }) {
  return (
    <div className={styles.merchantText}>
      {tradeScreen === "buy" ? (
        <h1>
          {" "}
          I'll sell you this item for {itemPrice !== 0 ? itemPrice : "?"} moras
        </h1>
      ) : (
        <h1>I'll buy this item for {itemPrice} moras</h1>
      )}
    </div>
  );
}

TradeMerchantText.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  /*   objectInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rarity: PropTypes.number.isRequired,
  }), */
};
