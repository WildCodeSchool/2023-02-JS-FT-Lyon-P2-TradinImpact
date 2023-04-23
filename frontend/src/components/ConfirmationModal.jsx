import PropTypes from "prop-types";
import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({
  inventory,
  setInventory,
  tradeScreen,
  setTradeScreen,
  setShowModal,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3>
          {tradeScreen === "buy" ? "Buy" : "Sell"}
          {selectedItem ? selectedItem.name : " item"} for /Many/ moras ?
        </h3>
        <div>
          <button
            type="button"
            className="button-confirm"
            onClick={() => {
              const selection = selectedItem;
              const inventoryToModify = inventory;
              if (tradeScreen === "sell") {
                selection.possessed -= 1;
              } else if (tradeScreen === "buy") {
                if (inventory.includes(selection)) {
                  inventoryToModify.selection.possessed += 1;
                } else {
                  setInventory(inventoryToModify.push(selectedItem));
                  inventoryToModify.selection.possessed = 1;
                }
              }
              if (selectedItem) {
                setSelectedItem(null);
              }
              setShowModal(false);
              setTradeScreen("presentation");
              /* Ajouter ici les effets financiers de la transaction (ajout des moras au state) */
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
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
  setTradeScreen: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
};
