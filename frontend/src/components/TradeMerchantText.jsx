import PropTypes from "prop-types";
import styles from "./TradeMerchantText.module.css";

export default function TradeMerchantText({
  tradeScreen,
  itemPrice,
  itemQuantity,
}) {
  return (
    <div className={styles.merchantText}>
      {tradeScreen === "buy" ? (
        <h1>
          {" "}
          I'll sell you this item for {itemPrice !== 0 ? itemPrice : "?"} moras
        </h1>
      ) : (
        <h1>
          I'll buy {itemQuantity > 1 ? "these items" : "this item"} for{" "}
          {itemQuantity > 1 ? itemPrice * itemQuantity : itemPrice} moras
        </h1>
      )}
    </div>
  );
}

TradeMerchantText.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemQuantity: PropTypes.string.isRequired,
};
