import PropTypes from "prop-types";

function TradeItemDisplay({ tradeScreen, objectName }) {
  if (tradeScreen === "buy") {
    return (
      <div>
        <div>
          <img
            src={`https://api.genshin.dev/materials/cooking-ingredients/${objectName}`}
            alt={objectName}
          />
        </div>
        <div>
          <h2>
            {objectName.charAt(0).toUpperCase() +
              objectName.slice(1).replaceAll("-", " ")}{" "}
            : 22 Moras
          </h2>
        </div>
      </div>
    );
  }
}
TradeItemDisplay.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
};
export default TradeItemDisplay;
