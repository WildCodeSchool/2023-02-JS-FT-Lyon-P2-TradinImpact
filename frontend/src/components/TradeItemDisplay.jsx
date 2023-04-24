import PropTypes from "prop-types";
import styles from "./TradeItemDisplay.module.css";

export default function TradeItemDisplay({ tradeScreen, selectedItem }) {
  return (
    <div className={styles.randomItemDisplay}>
      {tradeScreen === "buy" ? (
        <div>
          <div className={styles.randomItemImg}>
            <img
              src={`https://api.genshin.dev/materials/cooking-ingredients/${selectedItem.name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              alt={selectedItem.name}
            />
          </div>
          <div className={styles.randomItemName}>
            <h2>
              {/* {objectName.charAt(0).toUpperCase() +
                objectName.slice(1).replaceAll("-", " ")} */}
              {selectedItem ? selectedItem.name : null}
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.randomItemImg}>
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
      )}
    </div>
  );
}

TradeItemDisplay.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  /* REGLER DETECTION DU PROP TYPE OBJECT NAME DANS SELL */
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
