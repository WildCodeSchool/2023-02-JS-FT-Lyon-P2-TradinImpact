import React from "react";
import PropTypes from "prop-types";
import styles from "./EndModal.module.css";

export default function EndModal({ setTradeScreen }) {
  return (
    <>
      <div className={styles.header}>
        <p> Congratulations! You managed to reach your goal! </p>
      </div>
      <div className={styles.gachascreen}>
        <img src="" alt="" />
      </div>
      <div className={styles.footer}>
        <p> You have unlocked the encyclopedia! (tap the avatar to display) </p>
        <button type="button" onClick={setTradeScreen("presentation")}>
          {" "}
          Close{" "}
        </button>
      </div>
    </>
  );
}

EndModal.propTypes = {
  setTradeScreen: PropTypes.func.isRequired,
};
