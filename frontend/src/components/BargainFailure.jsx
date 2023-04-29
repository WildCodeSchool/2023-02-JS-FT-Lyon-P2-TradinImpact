import PropTypes from "prop-types";
import styles from "./BargainFailure.module.css";

export default function BargainFailure({
  setTradeScreen,
  setShowBargainFailure,
  merchantName,
}) {
  const handleClick = () => {
    setShowBargainFailure(false);
    setTradeScreen("presentation");
  };

  return (
    <div className={styles.background}>
      <div className={styles.failureModal}>
        <h3>
          {merchantName.charAt(0).toUpperCase() +
            merchantName.slice(1).toLowerCase()}{" "}
          does not approve of this price !
        </h3>
        <button type="button" onClick={() => handleClick()}>
          Close
        </button>
      </div>
    </div>
  );
}

BargainFailure.propTypes = {
  setTradeScreen: PropTypes.func.isRequired,
  setShowBargainFailure: PropTypes.func.isRequired,
  merchantName: PropTypes.string.isRequired,
};
