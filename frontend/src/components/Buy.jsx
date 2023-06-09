import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import ConfirmationModal from "./ConfirmationModal";
import Recap from "./Recap";
import TradeMenu from "./TradeMenu";
import TradeItemDisplay from "./TradeItemDisplay";
import Merchant from "./Merchant";
import TradeMerchantText from "./TradeMerchantText";
import styles from "./Buy.module.css";
import BargainModal from "./BargainModal";
import BargainFailure from "./BargainFailure";

export default function Buy({
  inventory,
  setInventory,
  random,
  tradeScreen,
  setTradeScreen,
  setShowModal,
  showModal,
  showBargainModal,
  setShowBargainModal,
  selectedItem,
  setSelectedItem,
  showRecap,
  setShowRecap,
  showBargainFailure,
  setShowBargainFailure,
  moraCount,
  setMoraCount,
  itemPrice,
  setItemPrice,
  portrait,
  setPortrait,
  merchantName,
  setMerchantName,
  merchants,
  setBuyOrSell,
  playerBet,
  setPlayerBet,
  itemQuantity,
  setItemQuantity,
}) {
  const merchantItems = [
    "flour",
    "almond",
    "cabbage",
    "fish",
    "crab",
    "milk",
    "pepper",
    "rice",
    "salt",
    "shrimp-meat",
    "butter",
    "cream",
    "ham",
    "fowl",
    "smoked-fowl",
    "sugar",
    "bacon",
    "cheese",
    "crab-roe",
    "tofu",
    "jam",
    "sausage",
  ];

  const showToastMessage = (error) => {
    toast.error(
      `There's been a problem. Go back to the trade menu and try again later. (${error})`,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  let randomMerchant = null;
  const randomizeMerchant = () => {
    const randomMerchantIndex = random(0, merchants.length - 1);
    randomMerchant = merchants[randomMerchantIndex];
    setMerchantName(randomMerchant);
    setPortrait(
      `https://api.genshin.dev/characters/${randomMerchant}/portrait`
    );
  };
  const randomizeItem = () => {
    const randomItemIndex = random(0, merchantItems.length - 1);
    fetch("https://api.genshin.dev/materials/cooking-ingredients/")
      .then((response) => response.json())
      .then((data) => setSelectedItem(data[merchantItems[randomItemIndex]]))
      .catch((error) => showToastMessage(error));
  };

  /* Randomisation du marchand et de l'item qu'il vend au montage du composant */
  useEffect(() => {
    randomizeMerchant();
    randomizeItem();
  }, []);

  /* Randomisation de l'item et du marchand au clic sur le bouton Next */

  const handleClick = () => {
    randomizeMerchant();
    randomizeItem();
  };

  useEffect(() => {
    if (selectedItem != null) {
      const itemRarity = selectedItem.rarity;

      const getPrice = (rarity) => {
        if (rarity === undefined) {
          setItemPrice(random(15, 25));
        } else if (rarity === 2) {
          setItemPrice(random(25, 35));
        } else if (rarity === 3) {
          setItemPrice(random(35, 45));
        }
      };

      getPrice(itemRarity);
    }
  }, [selectedItem]);

  return (
    <div className={styles.display}>
      <ToastContainer />
      {showBargainModal ? (
        <BargainModal
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowBargainModal={setShowBargainModal}
          showBargainFailure={showBargainFailure}
          setShowBargainFailure={setShowBargainFailure}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowRecap={setShowRecap}
          itemPrice={itemPrice}
          setItemPrice={setItemPrice}
          inventory={inventory}
          setInventory={setInventory}
          moraCount={moraCount}
          setMoraCount={setMoraCount}
          random={random}
          handleClick={handleClick}
          portrait={portrait}
          playerBet={playerBet}
          setPlayerBet={setPlayerBet}
        />
      ) : null}
      {showModal ? (
        <ConfirmationModal
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowModal={setShowModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowRecap={setShowRecap}
          itemPrice={itemPrice}
          inventory={inventory}
          setInventory={setInventory}
          moraCount={moraCount}
          setMoraCount={setMoraCount}
        />
      ) : null}
      {showRecap ? (
        <Recap
          itemPrice={itemPrice}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setShowRecap={setShowRecap}
          playerBet={playerBet}
          setPlayerBet={setPlayerBet}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
        />
      ) : null}
      {showBargainFailure ? (
        <BargainFailure
          setShowBargainFailure={setShowBargainFailure}
          merchantName={merchantName}
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          setBuyOrSell={setBuyOrSell}
        />
      ) : null}
      <TradeMerchantText
        tradeScreen={tradeScreen}
        itemPrice={itemPrice}
        selectedItem={selectedItem}
      />
      {selectedItem && (
        <TradeItemDisplay
          tradeScreen={tradeScreen}
          selectedItem={selectedItem}
        />
      )}
      <Merchant portrait={portrait} />
      <TradeMenu
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
        setShowModal={setShowModal}
        showBargainModal={showBargainModal}
        setShowBargainModal={setShowBargainModal}
        handleClick={handleClick}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        moraCount={moraCount}
        itemPrice={itemPrice}
      />
    </div>
  );
}
Buy.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showBargainModal: PropTypes.bool.isRequired,
  setShowBargainModal: PropTypes.func.isRequired,
  showBargainFailure: PropTypes.bool.isRequired,
  setShowBargainFailure: PropTypes.func.isRequired,
  selectedItem: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
  setItemPrice: PropTypes.func.isRequired,
  portrait: PropTypes.string.isRequired,
  setPortrait: PropTypes.func.isRequired,
  merchantName: PropTypes.string.isRequired,
  setMerchantName: PropTypes.func.isRequired,
  merchants: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setBuyOrSell: PropTypes.func.isRequired,
  playerBet: PropTypes.string.isRequired,
  setPlayerBet: PropTypes.func.isRequired,
  itemQuantity: PropTypes.string.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
};
