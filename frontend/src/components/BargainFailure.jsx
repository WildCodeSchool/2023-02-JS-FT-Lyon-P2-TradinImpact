import PropTypes from "prop-types";
import styles from "./BargainFailure.module.css";

export default function BargainFailure({
  tradeScreen,
  setTradeScreen,
  setShowBargainFailure,
  merchantName,
  setBuyOrSell,
}) {
  const handleClickAccept = () => {
    /* Récupère la valeur de l'écran de jeu (buy ou sell) avant de passer au bargain afin de
    pouvoir indiquer les infos correspondantes dans le récap du bargain */
    setBuyOrSell(tradeScreen);
    setShowBargainFailure(false);
    setTradeScreen("bargain");
  };

  const handleClickRefuse = () => {
    setShowBargainFailure(false);
    setTradeScreen("presentation");
  };

  return (
    <div className={styles.background}>
      <div className={styles.failureModal}>
        <h3>
          {merchantName.charAt(0).toUpperCase() +
            merchantName.slice(1).toLowerCase()}{" "}
          does not approve of this price and wants to fight to settle the deal !
        </h3>
        <div className={styles.failureButtons}>
          <button type="button" onClick={() => handleClickAccept()}>
            Accept
          </button>
          <button type="button" onClick={() => handleClickRefuse()}>
            Refuse
          </button>
        </div>
      </div>
    </div>
  );
}

BargainFailure.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setShowBargainFailure: PropTypes.func.isRequired,
  merchantName: PropTypes.string.isRequired,
  setBuyOrSell: PropTypes.func.isRequired,
};
