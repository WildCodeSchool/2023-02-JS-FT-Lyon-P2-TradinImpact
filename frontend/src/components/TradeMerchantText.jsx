import PropTypes from "prop-types";

function TradeMerchantText({ tradeScreen, itemPrice }) {
  if (tradeScreen === "buy") {
    return (
      <div>
        {" "}
        <h1>
          I'll sell you this item for {itemPrice !== 0 ? itemPrice : "?"} moras
        </h1>
      </div>
    );
  }
  if (tradeScreen === "sell") {
    return (
      <div>
        {" "}
        <h1>I'll buy you this item for ? moras</h1>
      </div>
    );
  }
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

export default TradeMerchantText;
