import PropTypes from "prop-types";
import { useGatherContext } from "../contexts/GatherContext";
import styles from "./GatherRecap.module.css";

export default function GatherRecap({
  // inventory,
  // setInventory,
  gatherSatchel,
}) {
  // Import du context
  const { setGatherScreen, setStartCooldown } = useGatherContext();
  // Au clic du bouton Close, on affiche le cooldown et on démarre le timer
  const handleClick = () => {
    setGatherScreen("cooldown");
    setStartCooldown(true);
  };

  let loot = 0;
  gatherSatchel.forEach((item) => {
    // console.log(item);
    loot += item.possessed;
    // console.log(loot);
  });

  return (
    <div className={styles.gatherRecapBackground}>
      <div className={styles.gatherRecap}>
        <p>You managed to gather {loot.toString()} items</p>
        <div>
          {/* {*itemsGathered.map(item => (item.image) (item.name) x (item.count))*} */}
          {gatherSatchel.map((item) => {
            return (
              <p className={styles.itemLine}>
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
  // inventory: PropTypes.arrayOf.isRequired,
  // setInventory: PropTypes.func.isRequired,
  gatherSatchel: PropTypes.arrayOf.isRequired,
  // setGatherSatchel: PropTypes.func.isRequired,
};
