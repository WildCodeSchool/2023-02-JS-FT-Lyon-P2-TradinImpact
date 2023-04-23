import PropTypes from "prop-types";
import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({
  // inventory,
  // setInventory,
  tradeScreen,
  setShowModal,
  setShowRecap,
  selectedItem,
  setSelectedItem,
}) {
  /* la modale est alimentée par le state itemSelected */
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
              // const inventoryToModify = inventory;
              if (tradeScreen === "sell") {
                /* si on se trouve dans le menu Sell, cliquer sur le bouton Confirmer enlève un élément de l'item sélectionné de l'inventaire */
                selection.possessed -= 1;
              } else if (tradeScreen === "buy") {
                /* si on se trouve dans le menu Buy, cliquer sur le bouton Confirmer ajoute l'élément à l'inventaire, ou, s'il est déjà présent, incrémente la possession de cet objet de 1 */
                /* IL FAUDRA REVOIR LA CONDITION CI-DESSOUS lorsque le menu Buy sera complètement codé avec un bon dialogue avec les states inventory et itemSelected */
                // if (inventory.includes(selection)) {
                //   inventoryToModify.selection.possessed += 1;
                // } else {
                //   setInventory(inventoryToModify.push(selectedItem));
                //   inventoryToModify.selection.possessed = 1;
                // }
              }
              /* On remet à null le state selectedItem */
              if (selectedItem) {
                setSelectedItem(null);
              }
              /* On fait disparaître la modale et on retourne au menu Présentation */
              setShowModal(false);
              setShowRecap(true);
              /* AJOUTER ICI LES EFFETS FINANCIERS DE LA TRANSACTION */
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => {
              /* On fait disparaître la modale et on retourne au menu Vente */
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
  setShowModal: PropTypes.func.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  // inventory: PropTypes.string.isRequired,
  // setInventory: PropTypes.func.isRequired,
};
