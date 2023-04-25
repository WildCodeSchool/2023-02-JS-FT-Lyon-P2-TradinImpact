import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./GatherGame.module.css";

export default function GatherGame({ random, itemsForSession }) {
  const [timer, setTimer] = useState(30);
  const [popTimer, setPopTimer] = useState(null);
  const [itemToPop, setItemToPop] = useState("");
  const [isGameOn, setIsGameOn] = useState(true);
  let timerInterval = null;
  let popTimerInterval = null;

  // La fonction ci-dessous génère un nouvel item et une balise image associée,
  // ainsi que des coordonnées aléatoires et le temps que l'image va rester à ces coordonnées.
  const randomiseItemPop = () => {
    if (isGameOn) {
      setPopTimer(random(1, 4));
      const randomIndex = random(0, itemsForSession.length - 1);
      const itemToSet = itemsForSession[randomIndex];
      const x = random(1, 5);
      const y = random(1, 5);
      itemToSet.gridArea = `${x.toString()} / ${y.toString()} / ${(
        x + 1
      ).toString()} / ${(y + 1).toString()}`;
      itemToSet.img = (
        <img
          style={{ gridArea: itemToSet.gridArea }}
          className={styles.popImage}
          src={`https://api.genshin.dev/materials/cooking-ingredients/${itemToSet.name
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          alt={itemToSet.name}
        />
      );
      setItemToPop(itemToSet);
      // console.log(itemToPop);
    }
  };

  useEffect(() => {
    randomiseItemPop();
    // console.log(itemToPop);
  }, []);

  /* le useEffect permet de mettre à jour le timer toutes les 1000ms */
  useEffect(() => {
    timerInterval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      clearInterval(timerInterval);
      setIsGameOn(false);
    }
    return () => clearInterval(timerInterval);
  }, [timer]);

  useEffect(() => {
    popTimerInterval = setInterval(() => {
      setPopTimer(popTimer - 1);
    }, 1000);
    if (popTimer === 0) {
      clearInterval(popTimerInterval);
      // console.log("popTimer = 0");
      randomiseItemPop();
    }
    return () => clearInterval(popTimerInterval);
  }, [popTimer]);

  if (isGameOn) {
    return (
      <div className={styles.gatherGameWindow}>
        <div className={styles.popWindow}>{itemToPop.img}</div>
        <div className={styles.counters}>
          <div>{timer}</div> <div>{popTimer}</div> <div>{itemToPop.name}</div>
        </div>
      </div>
    );
  }
}

GatherGame.propTypes = {
  random: PropTypes.func.isRequired,
  itemsForSession: PropTypes.arrayOf.isRequired,
};
