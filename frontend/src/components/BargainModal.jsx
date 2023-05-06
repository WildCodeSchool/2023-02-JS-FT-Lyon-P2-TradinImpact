import PropTypes from "prop-types";
import { useState } from "react";
import { useAvatarContext } from "../contexts/AvatarContext";
import styles from "./BargainModal.module.css";

export default function BargainModal({
  inventory,
  setInventory,
  tradeScreen,
  setShowBargainModal,
  setShowRecap,
  setShowBargainFailure,
  selectedItem,
  itemPrice,
  setItemPrice,
  moraCount,
  setMoraCount,
  random,
  itemQuantity,
  playerBet,
  setPlayerBet,
}) {
  const { avatar } = useAvatarContext();
  /* la modale est alimentée par le state itemSelected */

  const [showExcessAlert, setShowExcessAlert] = useState(false);
  const [showVoidAlert, setShowVoidAlert] = useState(false);
  const [showNaNAlert, setShowNaNAlert] = useState(false);
  const [showCheatAlert, setShowCheatAlert] = useState(false);
  const [showFSAlert, setShowFSAlert] = useState(false);
  const [showTooLowAlert, setShowTooLowAlert] = useState(false);
  const [showTooHighAlert, setShowTooHighAlert] = useState(false);

  /*   Ces variables permettent de déterminer par un booléan si le joueur remporte le bargain
  ou non sur la base d'un chiffre aléatoire  */
  const buyDeal = random(0, itemPrice) < playerBet;
  /*  Exemple : un joueur qui propose d'acheter un item 18 moras pour un prix affiché de 
  25 moras a 18 chances sur 25 de voir sa proposition acceptée. */
  const saleDeal =
    random(0, itemPrice * itemQuantity) <
    itemPrice * itemQuantity - (playerBet - itemPrice * itemQuantity);
  /* Exemple : un joueur qui propose de vendre un item 30 moras pour un prix affiché de 
  25 moras a 20 chances sur 25 de voir sa proposition acceptée.  */

  /* Fonction permettant de passer la mise saisie par le joueur via le formulaire dans le state
  playerBet */
  const handleChange = (event) => {
    setPlayerBet(event.target.value);
  };

  function onlyDigits(string) {
    for (let i = string.length - 1; i >= 0; i -= 1) {
      const d = string.charCodeAt(i);
      if (d < 48 || d > 57) return false;
    }
    return true;
  }

  let itemGot = false;

  return (
    <div className={styles.background}>
      <div className={styles.bargainmodal}>
        <h3>
          How much would you like to {tradeScreen === "buy" ? "buy" : "sell"}{" "}
          {itemQuantity > 1 ? "these" : "this"} ?{" "}
          {tradeScreen === "buy"
            ? ` min : ${Math.ceil(itemPrice * 0.75)} mora`
            : ` max : ${Math.floor(itemPrice * itemQuantity * 1.25)} mora`}
        </h3>
        <div>
          <form>
            <div className={styles.inputcontainer}>
              <input
                className={styles.input}
                id="bet"
                name="bet"
                type="text"
                maxLength={11}
                value={playerBet}
                onChange={handleChange}
              />
              <img
                src="src\assets\mora-coin.png"
                alt="mora coin"
                className={styles.bargainmoracoin}
              />
            </div>
            <button
              type="submit"
              className="button-confirm"
              onClick={(e) => {
                e.preventDefault();
                const selection = selectedItem;
                if (tradeScreen === "sell") {
                  if (playerBet === "") {
                    setShowVoidAlert(true);
                    setTimeout(() => setShowVoidAlert(false), 2000);
                  } else if (playerBet === "IAmACheater") {
                    setShowCheatAlert(true);
                    setMoraCount(1000);
                    setTimeout(() => setShowCheatAlert(false), 2000);
                  } else if (playerBet === "git gud") {
                    setShowFSAlert(true);
                    setMoraCount(-1000);
                    setTimeout(() => setShowFSAlert(false), 2000);
                  } else if (onlyDigits(playerBet) === false) {
                    setShowNaNAlert(true);
                    setTimeout(() => setShowNaNAlert(false), 2000);
                  } else if (playerBet > itemPrice * itemQuantity * 1.25) {
                    setShowTooHighAlert(true);
                    setTimeout(() => setShowTooHighAlert(false), 2000);
                  } else if (playerBet < itemPrice * itemQuantity) {
                    setShowTooLowAlert(true);
                    setTimeout(() => setShowTooLowAlert(false), 2000);
                  } else if (
                    playerBet < itemPrice * itemQuantity * 1.25 &&
                    playerBet > itemPrice &&
                    saleDeal
                  ) {
                    /*       On vérifie ici si le bargain est accepté ou non en fonction de l'état du booléen */
                    /* si on se trouve dans le menu Sell, cliquer sur le bouton Confirmer enlève un élément de l'item sélectionné de l'inventaire */
                    selection.possessed -= itemQuantity;
                    // setItemPrice(playerBet);
                    setMoraCount(moraCount + Math.floor(playerBet));
                    setShowRecap(true);
                    setShowBargainModal(false);
                  } else {
                    setShowBargainModal(false);
                    setShowBargainFailure(true);
                  }
                } else if (tradeScreen === "buy") {
                  if (playerBet > moraCount) {
                    setShowExcessAlert(true);
                    setTimeout(() => setShowExcessAlert(false), 2000);
                  } else if (playerBet === "") {
                    setShowVoidAlert(true);
                    setTimeout(() => setShowVoidAlert(false), 2000);
                  } else if (playerBet === "IAmACheater") {
                    setShowCheatAlert(true);
                    setMoraCount(1000);
                    setTimeout(() => setShowCheatAlert(false), 2000);
                  } else if (playerBet === "git gud") {
                    setShowFSAlert(true);
                    setMoraCount(-1000);
                    setTimeout(() => setShowFSAlert(false), 2000);
                  } else if (onlyDigits(playerBet) === false) {
                    setShowNaNAlert(true);
                    setTimeout(() => setShowNaNAlert(false), 2000);
                  } else if (playerBet < itemPrice * 0.75) {
                    setShowTooLowAlert(true);
                    setTimeout(() => setShowTooLowAlert(false), 2000);
                  } else if (playerBet > itemPrice) {
                    setShowTooHighAlert(true);
                    setTimeout(() => setShowTooHighAlert(false), 2000);
                  } else if (
                    playerBet > itemPrice * 0.75 &&
                    playerBet < itemPrice &&
                    buyDeal
                  ) {
                    /*       On vérifie ici si le bargain est accepté ou non en fonction de l'état du booléen */
                    /* si on se trouve dans le menu Buy, cliquer sur le bouton Confirmer ajoute l'élément 
                à l'inventaire, ou, s'il est déjà présent, incrémente la possession de cet objet de 1 */
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
                    setMoraCount(moraCount - Math.ceil(playerBet));
                    setShowBargainModal(false);
                    setShowRecap(true);
                    setItemPrice(playerBet);
                  } else {
                    setShowBargainModal(false);
                    setShowBargainFailure(true);
                  }
                }
              }}
            >
              Confirm
            </button>
          </form>
          <button
            type="button"
            onClick={() => {
              /* On fait disparaître la modale et on retourne au menu Vente */
              setShowBargainModal(false);
              setPlayerBet("");
            }}
            className="button-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      {showExcessAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar.img} alt="avatar" />
          <h4>
            {" "}
            Not enough <br /> moras !
          </h4>
        </div>
      ) : null}
      {showVoidAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar.img} alt="avatar" />
          <h4>
            {" "}
            You proposed <br /> nothing !
          </h4>
        </div>
      ) : null}
      {showNaNAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar.img} alt="avatar" />
          <h4>
            {" "}
            You must only <br /> use digits
          </h4>
        </div>
      ) : null}
      {showFSAlert ? (
        <div className={styles.alertmodal}>
          <img src="src\assets\avatar-default.png" alt="avatar" />
          <h4>
            {" "}
            Prepare <br /> to die!
          </h4>
        </div>
      ) : null}
      {showCheatAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar.img} alt="avatar" />
          <h4>
            {" "}
            You <br /> cheater!
          </h4>
        </div>
      ) : null}
      {showTooLowAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar.img} alt="avatar" />
          <h4>
            {" "}
            Too <br /> Low!
          </h4>
        </div>
      ) : null}
      {showTooHighAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar.img} alt="avatar" />
          <h4>
            {" "}
            Too <br /> High!
          </h4>
        </div>
      ) : null}
    </div>
  );
}

BargainModal.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  setShowBargainModal: PropTypes.func.isRequired,
  setShowBargainFailure: PropTypes.func.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
  setItemPrice: PropTypes.func.isRequired,
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  itemQuantity: PropTypes.string.isRequired,
  playerBet: PropTypes.string.isRequired,
  setPlayerBet: PropTypes.func.isRequired,
};
