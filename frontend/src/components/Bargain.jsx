import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Bargain.module.css";
import JanKenPon from "./JanKenPon";
import Merchant from "./Merchant";
import { useCombatContext } from "../contexts/CombatContext";
import Recap from "./Recap";

export default function Bargain({
  tradeScreen,
  setTradeScreen,
  portrait,
  selectedItem,
  showRecap,
  setShowRecap,
  setSelectedItem,
  buyOrSell,
  merchantName,
  itemPrice,
  moraCount,
  setMoraCount,
}) {
  const { enemyChoice, result } = useCombatContext();

  /* Sert à stocker la valeur du résultat du match car avec le state result initial,
  la valeur est reset au bout de 2sec */
  const [bargainResult, setBargainResult] = useState("");
  const [bargainPrice, setBargainPrice] = useState(itemPrice);

  /* Affiche le recap en cas de win ou de lose avec un délai de 2sec pour laisser le temps
  au joueur de voir le résultat à l'écran */
  useEffect(() => {
    if (result === "win" || result === "lose") {
      // Stock le résultat du combat afin de pouvoir le réutiliser pour l'affichage du récap
      setBargainResult(result);
      /* Calcul du prix final de l'objet en fonction du résultat du combat et du fait que l'on 
      cherche à vendre ou acheter un objet */
      if (
        (result === "win" && buyOrSell === "buy") ||
        (result === "lose" && buyOrSell === "sell")
      ) {
        setBargainPrice(Math.round(itemPrice * 0.85));
      } else if (
        (result === "lose" && buyOrSell === "buy") ||
        (result === "win" && buyOrSell === "sell")
      ) {
        setBargainPrice(Math.round(itemPrice * 1.15));
      }
      setTimeout(() => {
        /* Met à jour le solde de mora en fonction de l'issue du combat et du fait que l'on 
        cherche à vendre ou acheter un objet */
        if (buyOrSell === "buy") {
          /* Si la différence entre le solde de mora du joueur et le prix fixé à l'issue du combat 
          est inférieur à 0, on ne passe pas en négatif */
          if (moraCount - bargainPrice < 0) {
            setMoraCount(0);
          } else {
            setMoraCount(moraCount - bargainPrice);
          }
        } else if (buyOrSell === "sell") {
          setMoraCount(moraCount + bargainPrice);
        }
        setShowRecap(true);
      }, 2000);
    }
  }, [result]);

  return (
    <div className={styles.bargain}>
      <div>
        <Merchant portrait={portrait} />
        {enemyChoice !== "" && (
          <div className={styles.enemyChoice}>
            <img src={`./src/assets/${enemyChoice}.png`} alt={enemyChoice} />
          </div>
        )}
        <h6>"Let's settle this in one round"</h6>
      </div>
      {result === "win" && (
        <div className={`${styles.result} ${styles.win}`}>You win</div>
      )}
      {result === "draw" && (
        <div className={`${styles.result} ${styles.draw}`}>
          Draw, let's try again
        </div>
      )}
      {result === "lose" && (
        <div className={`${styles.result} ${styles.lose}`}>You lost</div>
      )}
      <JanKenPon />
      {showRecap === true && (
        <Recap
          tradeScreen={tradeScreen}
          setTradeScreen={setTradeScreen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowRecap={setShowRecap}
          buyOrSell={buyOrSell}
          bargainResult={bargainResult}
          merchantName={merchantName}
          itemPrice={itemPrice}
          bargainPrice={bargainPrice}
        />
      )}
    </div>
  );
}

Bargain.propTypes = {
  tradeScreen: PropTypes.string.isRequired,
  setTradeScreen: PropTypes.func.isRequired,
  portrait: PropTypes.string.isRequired,
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf.isRequired,
  }).isRequired,
  showRecap: PropTypes.bool.isRequired,
  setShowRecap: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  buyOrSell: PropTypes.string.isRequired,
  merchantName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  moraCount: PropTypes.number.isRequired,
  setMoraCount: PropTypes.func.isRequired,
};
