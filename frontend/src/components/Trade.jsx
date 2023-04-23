import { useState } from "react";
import PropTypes from "prop-types";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade({ inventory, setInventory }) {
  const [tradeScreen, setTradeScreen] = useState("presentation");
  const [selectedItem, setSelectedItem] = useState(null);
  /* simple fonction random réutilisable */
  const random = (min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1)) + min;
  };

  const [showModal, setShowModal] = useState(false);

  /* Selon l'état du state tradeScreen, l'écran sera celui de la présentation du jeu Trade (par défaut) ou de l'achat ou de la vente */
  if (tradeScreen === "presentation") {
    return (
      <PresentationTrade
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
      />
    );
  }
  if (tradeScreen === "sell") {
    return (
      <Sell
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        inventory={inventory}
        setInventory={setInventory}
        showModal={showModal}
        setShowModal={setShowModal}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    );
  }
  if (tradeScreen === "buy") {
    return (
      <Buy
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        inventory={inventory}
        setInventory={setInventory}
        random={random}
        showModal={showModal}
        setShowModal={setShowModal}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    );
  }
}

Trade.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
};
