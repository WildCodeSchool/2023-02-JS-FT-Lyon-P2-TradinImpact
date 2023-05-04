import PropTypes from "prop-types";
import React from "react";
import { useAvatarContext } from "../contexts/AvatarContext";
import styles from "./AvatarModal.module.css";

export default function AvatarModal({ setShowAvatarModal }) {
  const { avatars, setAvatar } = useAvatarContext();

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3>Select an avatar</h3>
        <div className={styles.avatarGallery}>
          {avatars.map((character) => {
            return (
              <button
                key={character}
                type="button"
                className={styles.selectAvatar}
                onClick={() => {
                  setAvatar({
                    name: character,
                    img: `https://api.genshin.dev/characters/${character}/icon-big`,
                  });
                }}
              >
                <img
                  className={styles.avatar}
                  src={`https://api.genshin.dev/characters/${character}/icon-big`}
                  alt={character}
                />
              </button>
            );
          })}
        </div>
        <button
          className={styles.avatarConfirm}
          type="button"
          onClick={() => setShowAvatarModal(false)}
        >
          Select this avatar
        </button>
      </div>
    </div>
  );
}

AvatarModal.propTypes = {
  setShowAvatarModal: PropTypes.func.isRequired,
};
