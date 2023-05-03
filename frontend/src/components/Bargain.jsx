import PropTypes from "prop-types";
// import { useEffect } from "react";
import styles from "./Bargain.module.css";
import JanKenPon from "./JanKenPon";
import Merchant from "./Merchant";
import { useCombatContext } from "../contexts/CombatContext";
import Recap from "./Recap";

export default function Bargain({
  setTradeScreen,
  portrait,
  selectedItem,
  showRecap,
  setShowRecap,
  setSelectedItem,
}) {
  const { enemyChoice } = useCombatContext();

  //   useEffect(() => {
  //     const recap = setTimeout(() => {
  //       setShowRecap(true);
  //     }, 2000);
  //     return () => clearTimeout(recap);
  //   }, [result]);

  //   if (result !== null) {
  //     const recap = setTimeout(() => {
  //       setShowRecap(true);
  //     }, 2000);
  //     return () => clearTimeout(recap);
  //   }

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
      <JanKenPon />
      {showRecap === true && (
        <Recap
          setTradeScreen={setTradeScreen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowRecap={setShowRecap}
        />
      )}
    </div>
  );
}

Bargain.propTypes = {
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
};
