import PropTypes from "prop-types";
import React from "react";
import styles from "./AvatarModal.module.css";

export default function AvatarModal({ setShowAvatarModal }) {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3>Select an avatar</h3>
        <button
          type="button"
          className={styles.selectAvatar}
          // onClick={() => console.log("click")}
        >
          <img
            className={styles.avatar}
            src="src\assets\avatar-default.png"
            alt="avatar"
          />
        </button>
        <button type="button" onClick={() => setShowAvatarModal(false)}>
          Select this avatar
        </button>
      </div>
    </div>
  );
}

AvatarModal.propTypes = {
  setShowAvatarModal: PropTypes.func.isRequired,
};
