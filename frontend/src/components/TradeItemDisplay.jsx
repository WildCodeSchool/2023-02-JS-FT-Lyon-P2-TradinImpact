import PropTypes from "prop-types";
import styles from "./TradeItemDisplay.module.css";

export default function TradeItemDisplay({ tradeScreen, objectName }) {
  return (
    <div className={styles.randomItemDisplay}>
      {tradeScreen === "buy" ? (
        <div>
          <div className={styles.randomItemImg}>
            <img
              src={`https://api.genshin.dev/materials/cooking-ingredients/${objectName}`}
              alt={objectName}
            />
          </div>
          <div className={styles.randomItemName}>
            <h2>
              {objectName.charAt(0).toUpperCase() +
                objectName.slice(1).replaceAll("-", " ")}
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <p>Image de l'objet sélectionné</p>
          <p>Nom de l'objet sélectionné</p>
        </div>
      )}
    </div>
  );
}

TradeItemDisplay.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  /* REGLER DETECTION DU PROP TYPE OBJECT NAME DANS SELL */
  objectName: PropTypes.string.isRequired,
};
