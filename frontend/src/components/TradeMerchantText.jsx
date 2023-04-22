import PropTypes from "prop-types";

function TradeMerchantText({ tradeScreen }) {
  if (tradeScreen === "buy") {
    return (
      <div>
        {" "}
        <h1>I'll sell you this item</h1>
      </div>
    );
  }
}
TradeMerchantText.propTypes = {
  tradeScreen: PropTypes.func.isRequired,
};

export default TradeMerchantText;
