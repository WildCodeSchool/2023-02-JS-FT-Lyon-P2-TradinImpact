import PropTypes from "prop-types";
import styles from "./TradeInventory.module.css";

export default function InventoryItem({ item, selectedItem, setSelectedItem }) {
  return (
    <div>
      <div className={styles.inventoryItem}>
        <button
          className={styles.tradeInventoryButton}
          type="button"
          onClick={() => setSelectedItem(item)}
        >
          <img
            src={`https://api.genshin.dev/materials/cooking-ingredients/${item.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            alt={`${item.name}`}
          />
        </button>
      </div>
      <div className={styles.inventoryItemStock}>
        {selectedItem === item ? "✔" : item.possessed}
      </div>
    </div>
  );
}

InventoryItem.propTypes = {
  setSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf.isRequired,
  }).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf.isRequired,
    possessed: PropTypes.number.isRequired,
  }).isRequired,
};
