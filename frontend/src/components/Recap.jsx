import PropTypes from "prop-types";
import styles from "./Recap.module.css";
import { useCombatContext } from "../contexts/CombatContext";

export default function Recap({
  itemPrice,
  selectedItem,
  setSelectedItem,
  tradeScreen,
  setTradeScreen,
  setShowRecap,
  buyOrSell,
  bargainResult,
  merchantName,
  setItemQuantity,
  itemQuantity,
  playerBet,
  setPlayerBet,
}) {
  const { setBargainResult } = useCombatContext();

  const handleClick = () => {
    setTradeScreen("presentation");

    /* On remet à null le state selectedItem */
    setSelectedItem(null);
    setShowRecap(false);
    setItemQuantity(1);
    setPlayerBet(null);
    setBargainResult("");
  };

  return (
    <div className={styles.recapBackground}>
      <div className={styles.recapModal}>
        {tradeScreen === "buy" && (
          <div>
            <h3>Successful Transaction !</h3>
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
        )}
        {tradeScreen === "sell" && (
          <div>
            <h3>Successful Transaction !</h3>
            <div className={styles.moraBalance}>
              <img src="src\assets\mora-coin.png" alt="mora coin" />
              <h4>
                +{" "}
                {playerBet !== null && playerBet !== ""
                  ? playerBet
                  : itemPrice * itemQuantity}{" "}
                moras
              </h4>
            </div>
            <br />
            <div className={styles.itemTransaction}>
              {selectedItem.sources ? (
                <img
                  src={`https://api.genshin.dev/materials/cooking-ingredients/${selectedItem.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  alt={`${selectedItem.name}`}
                />
              ) : (
                <img
                  src={`https://api.genshin.dev/materials/common-ascension/${selectedItem.name
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("'", "-")}`}
                  alt={selectedItem.name}
                />
              )}
              <h4>
                - {selectedItem.name}{" "}
                {itemQuantity > 1 ? `X${itemQuantity}` : null}
              </h4>
            </div>
          </div>
        )}
        {tradeScreen === "bargain" && buyOrSell === "buy" ? (
          <div>
            <h3>
              {bargainResult === "win"
                ? `You win, ${
                    merchantName.charAt(0).toUpperCase() +
                    merchantName.slice(1).toLowerCase()
                  } sold you the item for a lower price`
                : `You lost, ${
                    merchantName.charAt(0).toUpperCase() +
                    merchantName.slice(1).toLowerCase()
                  } sold you the item for the initial price`}
            </h3>
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
              <h4>- {bargainResult === "win" ? playerBet : itemPrice} moras</h4>
            </div>
          </div>
        ) : null}
        {tradeScreen === "bargain" && buyOrSell === "sell" ? (
          <div>
            <h3>
              {bargainResult === "win"
                ? `You win, ${
                    merchantName.charAt(0).toUpperCase() +
                    merchantName.slice(1).toLowerCase()
                  } purchased your item at a higher price`
                : `You lost, ${
                    merchantName.charAt(0).toUpperCase() +
                    merchantName.slice(1).toLowerCase()
                  } purchased your item at the initial price`}
            </h3>
            <div className={styles.moraBalance}>
              <img src="src\assets\mora-coin.png" alt="mora coin" />
              <h4>
                +{" "}
                {bargainResult === "win" ? playerBet : itemPrice * itemQuantity}{" "}
                moras
              </h4>
            </div>
            <br />
            <div className={styles.itemTransaction}>
              {selectedItem.sources ? (
                <img
                  src={`https://api.genshin.dev/materials/cooking-ingredients/${selectedItem.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  alt={`${selectedItem.name}`}
                />
              ) : (
                <img
                  src={`https://api.genshin.dev/materials/common-ascension/${selectedItem.name
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("'", "-")}`}
                  alt={selectedItem.name}
                />
              )}
              <h4>
                - {selectedItem.name}{" "}
                {itemQuantity > 1 ? `X${itemQuantity}` : null}
              </h4>
            </div>
          </div>
        ) : null}
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
  buyOrSell: PropTypes.string.isRequired,
  bargainResult: PropTypes.string.isRequired,
  merchantName: PropTypes.string.isRequired,
  itemQuantity: PropTypes.func.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  playerBet: PropTypes.string.isRequired,
  setPlayerBet: PropTypes.func.isRequired,
};
