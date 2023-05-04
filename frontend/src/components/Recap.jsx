import PropTypes from "prop-types";
import styles from "./Recap.module.css";

export default function Recap({
  itemPrice,
  selectedItem,
  setSelectedItem,
  tradeScreen,
  setTradeScreen,
  setShowRecap,
  setItemQuantity,
  itemQuantity,
  playerBet,
  setPlayerBet,
}) {
  const handleClick = () => {
    setTradeScreen("presentation");
    /* On remet à null le state selectedItem */
    setSelectedItem(null);
    setShowRecap(false);
    setItemQuantity(1);
    setPlayerBet(null);
  };

  return (
    <div className={styles.recapBackground}>
      <div className={styles.recapModal}>
        <h3>Successful Transaction !</h3>
        {tradeScreen === "buy" ? (
          <div>
            <div className={styles.itemTransaction}>
              <img
                src={`https://api.genshin.dev/materials/cooking-ingredients/${selectedItem.name
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                alt={`${selectedItem.name}`}
              />
              <h4>+ {selectedItem.name}</h4>
            </div>
            <br />
            <div className={styles.moraBalance}>
              <img src="src\assets\mora-coin.png" alt="mora coin" />
              <h4>- {itemPrice} moras</h4>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.moraBalance}>
              <img src="src\assets\mora-coin.png" alt="mora coin" />
              <h4>
                + {playerBet !== null ? playerBet : itemPrice * itemQuantity}{" "}
                moras
              </h4>
            </div>
            <br />
            <div className={styles.itemTransaction}>
              <img
                src={`https://api.genshin.dev/materials/cooking-ingredients/${selectedItem.name
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                alt={`${selectedItem.name}`}
              />
              <h4>
                - {selectedItem.name}{" "}
                {itemQuantity > 1 ? `X${itemQuantity}` : null}
              </h4>
            </div>
          </div>
        )}
        <button type="button" onClick={() => handleClick()}>
          Close
        </button>
      </div>
    </div>
  );
}

Recap.propTypes = {
  itemPrice: PropTypes.number.isRequired,
  selectedItem: PropTypes.shape.isRequired,
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  playerBet: PropTypes.string.isRequired,
  setPlayerBet: PropTypes.func.isRequired,
};
