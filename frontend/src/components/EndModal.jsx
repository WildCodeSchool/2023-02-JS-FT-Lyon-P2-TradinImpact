import React from "react";
import PropTypes from "prop-types";
// import { useEndGameContext } from "../contexts/EndGameContext";
import { useAvatarContext } from "../contexts/AvatarContext";
import styles from "./EndModal.module.css";

export default function EndModal({ setUncompleted, setShowEncyclopedia }) {
  const { avatar } = useAvatarContext();
  const handleClick = () => {
    /*      Ce changement d'état à la variable "uncompleted" permet de s'assurer que le joueur ne voit apparaître la endmodal que
     la première fois qu'il affiche un solde positif égal ou supérieur à 1000 moras */
    setUncompleted(false);
    /*     Une fois l'état ShowEncyclopedia passé de null à false, on peut vérifier la condition "if ShowEncyclopedia = false, setShowEnclycopedia(true)"
    lorsque le joueur clique sur son avatar. De cette manière, l'encyclopédie ne devient accessible qu'à partir de ce point.  */
    setShowEncyclopedia(false);
  };

  return (
    <div className={styles.EndModalbackground}>
      <div className={styles.EndModalheader}>
        <p> Congratulations! </p>
        <p> You managed to reach your goal! </p>
      </div>
      <div className={styles.gachascreen}>
        <img
          className={styles.gacha}
          src={
            avatar
              ? `https://api.genshin.dev/characters/${avatar.name}/gacha-splash`
              : `https://api.genshin.dev/characters/albedo/gacha-splash`
          }
          alt="gachasplash"
        />
      </div>
      <div className={styles.EndModalfooter}>
        <p>
          {" "}
          You have unlocked the encyclopedia! (tap your avatar to display){" "}
        </p>
        <button
          className={styles.buttonclose}
          type="button"
          onClick={handleClick}
        >
          {" "}
          Close{" "}
        </button>
      </div>
    </div>
  );
}

EndModal.propTypes = {
  setUncompleted: PropTypes.func.isRequired,
  setShowEncyclopedia: PropTypes.func.isRequired,
};
