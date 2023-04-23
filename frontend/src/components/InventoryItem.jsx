import PropTypes from "prop-types";

export default function InventoryItem({ item, selectedItem, setSelectedItem }) {
  // function handleSelectItem(buttonItem) {
  //   if (selectedItem === buttonItem) {
  //     setSelectedItem(null);
  //   } else {
  //     setSelectedItem(buttonItem);
  //   }
  // }

  return (
    <div className="inventoryElement">
      <div className="inventoryItem">
        {/* <button type="button" onClick={() => handleSelectItem(item)}> */}
        <button type="button" onClick={() => setSelectedItem(item)}>
          <img
            src={`https://api.genshin.dev/materials/cooking-ingredients/${item.name.toLowerCase()}`}
            alt={`${item.name}`}
          />
        </button>
      </div>
      <div className="inventoryItemStock">
        {selectedItem === item ? "&#2714" : item.possessed}
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
