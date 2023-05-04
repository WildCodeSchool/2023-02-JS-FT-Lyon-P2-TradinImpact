import PropTypes from "prop-types";
import React from "react";
import styles from "./Encyclopedia.module.css";

export default function Encyclopedia({ inventory, setShowEncyclopedia }) {
  const numberOfItemsTotal = 66;
  const numberOfItemsCollected = inventory.length;

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h1>Encyclopédie</h1>
        <div className={styles.encyclopediaGrid}>
          {inventory.map((item) => {
            return (
              <button
                key={item.name}
                type="button"
                className={styles.itemButton}
                // onClick={() => {
                //   console.log("click");
                // }}
              >
                {item.sources ? (
                  <img
                    className={styles.itemImg}
                    src={`https://api.genshin.dev/materials/cooking-ingredients/${item.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    alt={`${item.name}`}
                  />
                ) : (
                  <img
                    className={styles.itemImg}
                    src={`https://api.genshin.dev/materials/common-ascension/${item.name
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("'", "-")}`}
                    alt={item.name}
                  />
                )}
              </button>
            );
          })}
        </div>
        <p>
          {numberOfItemsCollected}/{numberOfItemsTotal} items collected
        </p>
        <button
          className={styles.close}
          type="button"
          onClick={() => setShowEncyclopedia(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

Encyclopedia.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setShowEncyclopedia: PropTypes.func.isRequired,
};
