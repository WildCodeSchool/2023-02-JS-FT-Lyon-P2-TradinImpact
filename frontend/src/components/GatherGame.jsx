import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./GatherGame.module.css";

export default function GatherGame({
  random,
  itemsForSession,
  gatherSatchel,
  setGatherSatchel,
  setGatherScreen,
}) {
  const [timer, setTimer] = useState(30);
  const [popTimer, setPopTimer] = useState(null);
  const [itemToPop, setItemToPop] = useState({
    name: "",
    description: "",
    sources: [],
    possessed: "",
  });
  const [isGameOn, setIsGameOn] = useState(true);
  const [count, setCount] = useState(0);
  let timerInterval = null;
  let popTimerInterval = null;
  let clicks = null;

  // La fonction ci-dessous génère un nouvel item et une balise image associée,
  // ainsi que des coordonnées aléatoires et le temps que l'image va rester à ces coordonnées.
  const randomiseItemPop = () => {
    clicks = 0;
    if (isGameOn) {
      setPopTimer(random(1, 2));
      const randomIndex = random(0, itemsForSession.length - 1);
      const itemToSet = itemsForSession[randomIndex];
      const x = random(1, 81);
      const y = random(1, 81);
      const timesToClick = random(3, 6);
      itemToSet.timesToClick = timesToClick;
      itemToSet.gridArea = `${x.toString()} / ${y.toString()} / ${(
        x + 20
      ).toString()} / ${(y + 20).toString()}`;
      itemToSet.style = { gridArea: itemToSet.gridArea };
      itemToSet.img = (
        <button
          className={styles.popButton}
          style={itemToSet.style}
          type="button"
          onClick={() => {
            // console.log("click");
            clicks += 1;
            // console.log(clicks);
            if (clicks === itemToSet.timesToClick) {
              // console.log("ok !");
              let itemGot = false;
              for (const item of gatherSatchel) {
                if (itemGot === false) {
                  if (item.name === itemToSet.name) {
                    item.possessed += 1;
                    itemGot = true;
                  }
                }
              }
              if (itemGot === false) {
                itemToSet.possessed = 1;
                setGatherSatchel([...gatherSatchel, itemToSet]);
                itemGot = true;
              }
              if (itemGot) {
                setCount(() => count + 1);
              }
            }
          }}
        >
          <p>
            {itemToSet.timesToClick - clicks >= 0
              ? itemToSet.timesToClick - clicks
              : 0}
          </p>
          <img
            className={styles.popImage}
            src={`https://api.genshin.dev/materials/cooking-ingredients/${itemToSet.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            alt={itemToSet.name}
          />
        </button>
      );
      setItemToPop(itemToSet);
      // console.log(itemToPop);
      // console.log(gatherSatchel);
    }
  };

  if (popTimer === 0) {
    clearInterval(popTimerInterval);
    // console.log("popTimer = 0");
    randomiseItemPop();
  }

  useEffect(() => {
    setGatherSatchel([]);
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
      setGatherScreen("recap");
    }
    return () => clearInterval(timerInterval);
  }, [timer]);

  useEffect(() => {
    popTimerInterval = setInterval(() => {
      setPopTimer(popTimer - 1);
    }, 1000);
    return () => clearInterval(popTimerInterval);
  }, [popTimer]);

  if (isGameOn) {
    return (
      <div className={styles.gatherGameWindow}>
        <div className={styles.popWindow}>{itemToPop.img}</div>
        <div className={styles.counters}>
          <div>{timer}s remaining</div> <div>{count} items gathered</div>
        </div>
      </div>
    );
  }
}

GatherGame.propTypes = {
  random: PropTypes.func.isRequired,
  setGatherSatchel: PropTypes.func.isRequired,
  gatherSatchel: PropTypes.arrayOf.isRequired,
  itemsForSession: PropTypes.arrayOf.isRequired,
  setGatherScreen: PropTypes.func.isRequired,
};
