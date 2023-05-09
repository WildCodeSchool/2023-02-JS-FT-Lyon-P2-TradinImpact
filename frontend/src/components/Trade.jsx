import { useState } from "react";
import PropTypes from "prop-types";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";
import Buy from "./Buy";
import Bargain from "./Bargain";

export default function Trade({
  inventory,
  setInventory,
  moraCount,
  setMoraCount,
  random,
  uncompleted,
  setUncompleted,
  setShowEncyclopedia,
}) {
  const [tradeScreen, setTradeScreen] = useState("presentation");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRecap, setShowRecap] = useState(false);
  const [itemPrice, setItemPrice] = useState(0);
  const [showBargainModal, setShowBargainModal] = useState(false);
  const [showBargainFailure, setShowBargainFailure] = useState(false);
  const [buyOrSell, setBuyOrSell] = useState("");
  const [portrait, setPortrait] = useState("albedo");
  const [merchantName, setMerchantName] = useState(null);
  const [playerBet, setPlayerBet] = useState(null);
  const merchants = [
    "albedo",
    "amber",
    "barbara",
    "diluc",
    "bennett",
    "jean",
    "ningguang",
    "ganyu",
    "tartaglia",
  ];

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
        moraCount={moraCount}
        uncompleted={uncompleted}
        setUncompleted={setUncompleted}
        setShowEncyclopedia={setShowEncyclopedia}
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
        portrait={portrait}
        setPortrait={setPortrait}
        merchantName={merchantName}
        setMerchantName={setMerchantName}
        merchants={merchants}
        setBuyOrSell={setBuyOrSell}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
        playerBet={playerBet}
        setPlayerBet={setPlayerBet}
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
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
        moraCount={moraCount}
        setMoraCount={setMoraCount}
        portrait={portrait}
        setPortrait={setPortrait}
        merchantName={merchantName}
        setMerchantName={setMerchantName}
        merchants={merchants}
        setBuyOrSell={setBuyOrSell}
        playerBet={playerBet}
        setPlayerBet={setPlayerBet}
      />
    );
  }
  if (tradeScreen === "bargain") {
    return (
      <Bargain
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setSelectedItem={setSelectedItem}
        portrait={portrait}
        selectedItem={selectedItem}
        showRecap={showRecap}
        setShowRecap={setShowRecap}
        buyOrSell={buyOrSell}
        merchantName={merchantName}
        itemPrice={itemPrice}
        moraCount={moraCount}
        setMoraCount={setMoraCount}
        itemQuantity={itemQuantity}
        inventory={inventory}
        setInventory={setInventory}
        playerBet={playerBet}
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
  uncompleted: PropTypes.bool.isRequired,
  setUncompleted: PropTypes.func.isRequired,
  setShowEncyclopedia: PropTypes.func.isRequired,
};
