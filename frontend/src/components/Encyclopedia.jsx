import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./Encyclopedia.module.css";

export default function Encyclopedia({ inventory, setShowEncyclopedia }) {
  const numberOfItemsTotal = 66;
  const numberOfItemsCollected = inventory.length;
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [itemToDescribe, setItemToDescribe] = useState(null);

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
                onClick={() => {
                  setShowDescriptionModal(true);
                  setItemToDescribe(item);
                }}
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
        {showDescriptionModal ? (
          <div className={styles.descriptionBackground}>
            <div className={styles.descriptionModal}>
              {`${itemToDescribe.name} : ${itemToDescribe.description}`}
              <button
                type="button"
                className={styles.close}
                onClick={() => {
                  setShowDescriptionModal(false);
                  setItemToDescribe(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

Encyclopedia.propTypes = {
  inventory: PropTypes.arrayOf.isRequired,
  setShowEncyclopedia: PropTypes.func.isRequired,
};
