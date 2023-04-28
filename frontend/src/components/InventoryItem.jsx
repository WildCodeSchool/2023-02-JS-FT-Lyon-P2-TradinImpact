import PropTypes from "prop-types";
import styles from "./InventoryItem.module.css";

export default function InventoryItem({ item, selectedItem, setSelectedItem }) {
  return (
    <div className={styles.inventoryItemsBox}>
      <button
        type="button"
        onClick={() => setSelectedItem(item)}
        className={styles.inventoryItem}
      >
        <img
          src={`https://api.genshin.dev/materials/cooking-ingredients/${item.name
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          alt={`${item.name}`}
        />
      </button>
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
