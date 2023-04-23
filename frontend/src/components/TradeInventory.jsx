import { useState } from "react";
import PropTypes from "prop-types";
import InventoryItem from "./InventoryItem";

export default function TradeInventory({
  inventory,
  setIsItemSelected,
  setTradeScreen,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const mapInventory = (inv) => {
    return inv.map((item) => (
      <div className="inventoryItemsBox">
        <InventoryItem
          item={item}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
    ));
  };

  return (
    <div className="TradeInventory">
      <div className="TradeInventoryText">Select an item to sell</div>
      {mapInventory(inventory)}
      <button
        type="button"
        className="button-trade"
        onClick={() => (selectedItem ? setIsItemSelected(true) : null)}
      >
        Select
      </button>
      <button
        type="button"
        className="button-trade"
        onClick={() => {
          setTradeScreen("presentation");
          setIsItemSelected(null);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

TradeInventory.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  setIsItemSelected: PropTypes.func.isRequired,
};
