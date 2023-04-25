import PropTypes from "prop-types";
import InventoryItem from "./InventoryItem";
import styles from "./TradeInventory.module.css";

export default function TradeInventory({
  inventory,
  setIsItemSelected,
  setTradeScreen,
  selectedItem,
  setSelectedItem,
}) {
  /* la fonction mapInventory crée un item dans le menu uniquement si l'item est présent dans l'inventaire du joueur en au moins un exemplaire */
  const mapInventory = (inv) => {
    return inv.map((item) => {
      if (item.possessed === 0) {
        return null;
      }
      return (
        <div className={styles.inventoryItemsBox} key={item.name}>
          <InventoryItem
            item={item}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      );
    });
  };
  /* Le joueur ne peut cliquer sur Select que si un élément a été sélectionné (state selectedItem) */
  return (
    <div className={styles.tradeInventory}>
      <div className={styles.tradeInventoryText}>Select an item to sell</div>
      <div className={styles.inventoryItemsFlex}>{mapInventory(inventory)}</div>
      <div className={styles.buttonTradeContainer}>
        <button
          type="button"
          className={styles.buttonTrade}
          onClick={() => (selectedItem ? setIsItemSelected(true) : null)}
        >
          Select
        </button>
        <button
          type="button"
          className={styles.buttonTrade}
          onClick={() => {
            setTradeScreen("presentation");
            setIsItemSelected(null);
            setSelectedItem(null);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

TradeInventory.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setIsItemSelected: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};
