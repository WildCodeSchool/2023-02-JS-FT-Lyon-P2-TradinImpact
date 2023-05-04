import { useState } from "react";
import PropTypes from "prop-types";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";

export default function Trade({
  inventory,
  setInventory,
  moraCount,
  setMoraCount,
  random,
}) {
  const [tradeScreen, setTradeScreen] = useState("presentation");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRecap, setShowRecap] = useState(false);
  const [itemPrice, setItemPrice] = useState(0);
  const [showBargainModal, setShowBargainModal] = useState(false);
  const [showBargainFailure, setShowBargainFailure] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  /* Selon l'état du state tradeScreen, l'écran sera celui de la présentation du jeu Trade (par défaut) ou de l'achat ou de la vente */
  if (tradeScreen === "presentation") {
    return (
      <PresentationTrade
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        showBargainModal={showBargainModal}
        setShowBargainModal={setShowBargainModal}
        setItemQuantity={setItemQuantity}
      />
    );
  }
  if (tradeScreen === "sell") {
    return (
      <Sell
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        inventory={inventory}
        setInventory={setInventory}
        showModal={showModal}
        setShowModal={setShowModal}
        showBargainModal={showBargainModal}
        setShowBargainModal={setShowBargainModal}
        showBargainFailure={showBargainFailure}
        setShowBargainFailure={setShowBargainFailure}
        showRecap={showRecap}
        setShowRecap={setShowRecap}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        random={random}
        moraCount={moraCount}
        setMoraCount={setMoraCount}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
      />
    );
  }
  if (tradeScreen === "buy") {
    return (
      <Buy
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        inventory={inventory}
        setInventory={setInventory}
        random={random}
        showModal={showModal}
        setShowModal={setShowModal}
        showBargainModal={showBargainModal}
        setShowBargainModal={setShowBargainModal}
        showRecap={showRecap}
        setShowRecap={setShowRecap}
        showBargainFailure={showBargainFailure}
        setShowBargainFailure={setShowBargainFailure}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        moraCount={moraCount}
        setMoraCount={setMoraCount}
      />
    );
  }
}

Trade.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
};
