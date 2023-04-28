import PropTypes from "prop-types";
import { useState } from "react";
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
}) {
  /* la modale est alimentée par le state itemSelected */

  /*  Cet état permet de stocker la mise proposée par le joueur pour l'achat ou la vente
  par le biais du formulaire */
  const [playerBet, setPlayerBet] = useState(itemPrice);
  const [showExcessAlert, setShowExcessAlert] = useState(false);
  const [showVoidAlert, setShowVoidAlert] = useState(false);
  const [showNaNAlert, setShowNaNAlert] = useState(false);

  /*   Ces variables permettent de déterminer par un booléan si le joueur remporte le bargain
  ou non sur la base d'un chiffre aléatoire  */
  const buyDeal = random(0, itemPrice) < playerBet;
  /*  Exemple : un joueur qui propose d'acheter un item 18 moras pour un prix affiché de 
  25 moras a 18 chances sur 25 de voir sa proposition acceptée. */
  const saleDeal = random(0, itemPrice) < itemPrice - (playerBet - itemPrice);
  /* Exemple : un joueur qui propose de vendre un item 30 moras pour un prix affiché de 
  25 moras a 20 chances sur 25 de voir sa proposition acceptée.  */

  /* Fonction permettant de passer la mise saisie par le joueur via le formulaire dans le state
  playerBet */
  const handleChange = (event) => {
    setPlayerBet(event.target.value);
  };

  function onlyDigits(string) {
    // eslint-disable-next-line no-plusplus
    for (let i = string.length - 1; i >= 0; i--) {
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
          this ?
        </h3>
        <div>
          <div className={styles.inputcontainer}>
            <input
              className={styles.input}
              id="bet"
              name="bet"
              type="text"
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
            type="button"
            className="button-confirm"
            onClick={() => {
              const selection = selectedItem;
              if (tradeScreen === "sell") {
                if (playerBet === "") {
                  setShowVoidAlert(true);
                } else if (onlyDigits(playerBet) === false) {
                  setShowNaNAlert(true);
                } else if (saleDeal) {
                  /*       On vérifie ici si le bargain est accepté ou non en fonction de l'état du booléen */
                  /* si on se trouve dans le menu Sell, cliquer sur le bouton Confirmer enlève un élément de l'item sélectionné de l'inventaire */
                  selection.possessed -= 1;
                  setMoraCount(moraCount + Math.floor(playerBet));
                  setShowRecap(true);
                  setShowBargainModal(false);
                  setItemPrice(playerBet);
                } else {
                  setShowBargainModal(false);
                  /*                   randomizeMerchant();
                  getPrice(itemRarity); */
                  setShowBargainFailure(true);
                }
              } else if (tradeScreen === "buy") {
                /* si on se trouve dans le menu Buy, cliquer sur le bouton Confirmer ajoute l'élément 
                à l'inventaire, ou, s'il est déjà présent, incrémente la possession de cet objet de 1 */
                if (playerBet > moraCount) {
                  setShowExcessAlert(true);
                } else if (playerBet === "") {
                  setShowVoidAlert(true);
                } else if (onlyDigits(playerBet) === false) {
                  setShowNaNAlert(true);
                } else if (buyDeal) {
                  if (playerBet > moraCount) {
                    setShowBargainModal(false);
                  } else {
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
                  }
                } else {
                  setShowBargainModal(false);
                  /* handleClick(); */
                  setShowBargainFailure(true);
                }
              }
              /* On fait disparaître la modale et on retourne au menu Présentation */
              /*               setShowBargainModal(false);
              setShowRecap(true); */
              /* AJOUTER ICI LES EFFETS FINANCIERS DE LA TRANSACTION */
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => {
              /* On fait disparaître la modale et on retourne au menu Vente */
              setShowBargainModal(false);
            }}
            className="button-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      {showExcessAlert ? (
        <div className={styles.alertmodal}>
          <img src="src\assets\avatar-default.png" alt="avatar" />
          <h4>
            {" "}
            Not enough <br /> moras !
          </h4>
        </div>
      ) : null}
      {showVoidAlert ? (
        <div className={styles.alertmodal}>
          <img src="src\assets\avatar-default.png" alt="avatar" />
          <h4>
            {" "}
            You proposed <br /> nothing !
          </h4>
        </div>
      ) : null}
      {showNaNAlert ? (
        <div className={styles.alertmodal}>
          <img src="src\assets\avatar-default.png" alt="avatar" />
          <h4>
            {" "}
            You must only <br /> use digits
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
};