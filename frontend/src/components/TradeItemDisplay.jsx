import PropTypes from "prop-types";

function TradeItemDisplay({ tradeScreen, objectName, selectedItem }) {
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
          </h2>
        </div>
      </div>
    );
  }
  if (tradeScreen === "sell") {
    return (
      <div>
        <div>
          <img
            src={`https://api.genshin.dev/materials/cooking-ingredients/${selectedItem.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            alt={selectedItem.name}
          />
        </div>
        <div>
          <h2>
            {
              selectedItem.name /* objectName.charAt(0).toUpperCase() +
              objectName.slice(1).replaceAll("-", " ") */
            }{" "}
          </h2>
        </div>
      </div>
    );
  }
}
TradeItemDisplay.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
export default TradeItemDisplay;
