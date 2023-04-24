import PropTypes from "prop-types";
import styles from "./Recap.module.css";

export default function Recap({
  setSelectedItem,
  tradeScreen,
  setTradeScreen,
  setShowRecap,
}) {
  const handleClick = () => {
    setShowRecap(false);
    setTradeScreen("presentation");
    /* On remet à null le state selectedItem */
    setSelectedItem(null);
  };

  return (
    <div className={styles.recapBackground}>
      <div className={styles.recapModal}>
        <h3>Successful Transaction !</h3>
        {tradeScreen === "buy" ? (
          <div>
            <h4>+ Objet acheté</h4>
            <br />
            <div className={styles.moraBalance}>
              <img src="src\assets\mora-coin.png" alt="mora coin" />
              <h4>- Moras dépensés</h4>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.moraBalance}>
              <img src="src\assets\mora-coin.png" alt="mora coin" />
              <h4>+ Moras gagnés</h4>
            </div>
            <br />
            <h4>- Objet vendu</h4>
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
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};
