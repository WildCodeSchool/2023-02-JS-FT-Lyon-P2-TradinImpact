import PropTypes from "prop-types";
import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({
  inventory,
  setInventory,
  tradeScreen,
  setShowModal,
  setShowRecap,
  selectedItem,
  itemPrice,
  moraCount,
  setMoraCount,
  itemQuantity,
}) {
  /* la modale est alimentée par le state itemSelected */
  let itemGot = false;
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3>
          {tradeScreen === "buy" ? "Buy" : "Sell"} {selectedItem.name} for{" "}
          {itemQuantity > 1 ? itemPrice * itemQuantity : itemPrice} moras ?
        </h3>
        <div>
          <button
            type="button"
            className="button-confirm"
            onClick={() => {
              const selection = selectedItem;
              if (tradeScreen === "sell") {
                /* si on se trouve dans le menu Sell, cliquer sur le bouton Confirmer enlève un élément de l'item sélectionné de l'inventaire */
                if (itemQuantity === "1" || itemQuantity === 1) {
                  selection.possessed -= 1;
                  setMoraCount(moraCount + itemPrice);
                } else if (itemQuantity > 1) {
                  selection.possessed -= itemQuantity;
                  setMoraCount(moraCount + itemPrice * itemQuantity);
                }
              } else if (tradeScreen === "buy") {
                /* si on se trouve dans le menu Buy, cliquer sur le bouton Confirmer ajoute l'élément à l'inventaire, ou, s'il est déjà présent, incrémente la possession de cet objet de 1 */
                /* IL FAUDRA REVOIR LA CONDITION CI-DESSOUS lorsque le menu Buy sera complètement codé avec un bon dialogue avec les states inventory et itemSelected */
                for (const item of inventory) {
                  if (item.name === selectedItem.name) {
                    item.possessed += 1;
                    itemGot = true;
                  }
                }
                if (itemGot === false) {
                  selection.possessed = 1;
                  setInventory([...inventory, selection]);
                }
                setMoraCount(moraCount - itemPrice);
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
  selectedItem: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  itemQuantity: PropTypes.string.isRequired,
};
