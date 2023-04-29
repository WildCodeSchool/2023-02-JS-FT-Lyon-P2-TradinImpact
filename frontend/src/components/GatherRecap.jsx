import PropTypes from "prop-types";
import { useGatherContext } from "../contexts/GatherContext";
import styles from "./GatherRecap.module.css";

export default function GatherRecap({ inventory, gatherSatchel }) {
  // Import du context
  const { setGatherScreen, coolDownBegin } = useGatherContext();
  // Au clic du bouton Close, on affiche le cooldown et on démarre le timer
  const handleClick = () => {
    for (const gatheredItem of gatherSatchel) {
      let itemGot = false;
      for (const item of inventory) {
        if (gatheredItem.name === item.name) {
          item.possessed += 1;
          itemGot = true;
        }
      }
      if (itemGot === false) {
        inventory.push(gatheredItem);
      }
    }
    setGatherScreen("cooldown");
    coolDownBegin();
  };

  let loot = 0;
  gatherSatchel.forEach((item) => {
    loot += item.possessed;
  });

  return (
    <div className={styles.gatherRecapBackground}>
      <div className={styles.gatherRecap}>
        <p>You managed to gather {loot.toString()} items</p>
        <div>
          {gatherSatchel.map((item) => {
            return (
              <p className={styles.itemLine} key={item.name}>
                <img
                  src={`https://api.genshin.dev/materials/cooking-ingredients/${item.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  alt={`${item.name}`}
                />
                {item.name} : {item.possessed}{" "}
              </p>
            );
          })}
        </div>
        <button type="button" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
}

GatherRecap.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  gatherSatchel: PropTypes.arrayOf.isRequired,
};
