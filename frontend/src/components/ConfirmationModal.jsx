import PropTypes from "prop-types";
import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({
  tradeScreen,
  setShowModal,
  selectedItem,
}) {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3>
          {tradeScreen === "buy" ? "Buy" : "Sell"}
          {selectedItem ? selectedItem.name : " item"} for /Many/ moras ?
        </h3>
        <div>
          <button type="button" className="button-confirm">
            Confirm
          </button>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="button-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmationModal.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
