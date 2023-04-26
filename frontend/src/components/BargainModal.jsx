import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./BargainModal.module.css";

export default function BargainModal({
  inventory,
  setInventory,
  tradeScreen,
  setShowBargainModal,
  setShowRecap,
  selectedItem,
  itemPrice,
  setItemPrice,
  moraCount,
  setMoraCount,
  random,
  randomizeMerchant,
  handleClick,
}) {
  /* la modale est alimentée par le state itemSelected */

  /*  Cet état permet de stocker la mise proposée par le joueur pour l'achat ou la vente
  par le biais du formulaire */
  const [playerBet, setPlayerBet] = useState(moraCount);

  /*   Ces variables permettent de déterminer par un booléan si le joueur remporte le bargain
  ou non sur la base d'un chiffre aléatoire (exemple : un joueur qui propose d'acheter
  un item 15 moras pour un prix affiché de 20 moras a 15 chances sur 20 de voir sa proposition acceptée).  */
  const buyDeal = random(0, itemPrice) < playerBet;
  const saleDeal = random(0, itemPrice) < itemPrice - (playerBet - itemPrice);

  /* Fonction permettant de passer la mise saisie par le joueur via le formulaire dans le state
  playerBet */
  const handleChange = (event) => {
    setPlayerBet(event.target.value);
  };

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

  let itemGot = false;
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
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
                /*       On vérifie ici si le bargain est accepté ou non en fonction de l'état du booléen */
                if (saleDeal) {
                  /* si on se trouve dans le menu Sell, cliquer sur le bouton Confirmer enlève un élément de l'item sélectionné de l'inventaire */
                  selection.possessed -= 1;
                  setMoraCount(moraCount + Math.floor(playerBet));
                  setShowRecap(true);
                  setItemPrice(playerBet);
                } else {
                  setShowBargainModal(false);
                  randomizeMerchant();
                  getPrice(itemRarity);
                }
              } else if (tradeScreen === "buy") {
                /* si on se trouve dans le menu Buy, cliquer sur le bouton Confirmer ajoute l'élément à l'inventaire, ou, s'il est déjà présent, incrémente la possession de cet objet de 1 */
                /* IL FAUDRA REVOIR LA CONDITION CI-DESSOUS lorsque le menu Buy sera complètement codé avec un bon dialogue avec les states inventory et itemSelected */
                if (buyDeal) {
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
                  handleClick();
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
    </div>
  );
}

BargainModal.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  setShowBargainModal: PropTypes.func.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
  setItemPrice: PropTypes.func.isRequired,
  inventory: PropTypes.string.isRequired,
  setInventory: PropTypes.func.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
  randomizeMerchant: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
