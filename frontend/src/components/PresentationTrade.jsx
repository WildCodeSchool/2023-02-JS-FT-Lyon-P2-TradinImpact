import PropTypes from "prop-types";
import EndModal from "./EndModal";
import styles from "./PresentationTrade.module.css";

export default function PresentationTrade({
  setTradeScreen,
  setItemQuantity,
  moraCount,
  uncompleted,
  setUncompleted,
  setShowEncyclopedia,
}) {
  setItemQuantity(1);
  return (
    <div className={styles.display}>
      {moraCount >= 1000 && uncompleted ? (
        <EndModal
          setUncompleted={setUncompleted}
          setTradeScreen={setTradeScreen}
          setShowEncyclopedia={setShowEncyclopedia}
        />
      ) : null}
      <div className={styles.presTrade}>
        <div className={styles.presTradeInfo}>
          <h3>Buy or sell items !</h3>
          <br />
          <p>
            You can also try and bargain prices up to 25 %, but it's not
            guaranteed to work everytime...
          </p>
        </div>
        <div>
          <button
            type="button"
            className={styles.presTradeBtn}
            onClick={() => setTradeScreen("buy")}
          >
            Buy
          </button>
          <button
            type="button"
            className={styles.presTradeBtn}
            onClick={() => setTradeScreen("sell")}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}

PresentationTrade.propTypes = {
  setTradeScreen: PropTypes.func.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  uncompleted: PropTypes.bool.isRequired,
  setUncompleted: PropTypes.func.isRequired,
  setShowEncyclopedia: PropTypes.func.isRequired,
};
