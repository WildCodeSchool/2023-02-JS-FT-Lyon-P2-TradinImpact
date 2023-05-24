import PropTypes from "prop-types";
import { useState } from "react";
import { useAvatarContext } from "../contexts/AvatarContext";
import styles from "./TradeQuantityModal.module.css";
import defaultAvatar from "../assets/avatar-default.png";

export default function TradeQuantityModal({
  setShowQuantityModal,
  selectedItem,
  setItemQuantity,
  setIsItemSelected,
}) {
  const { avatar } = useAvatarContext();
  /* la modale est alimentée par le state itemSelected */
  const [playerChoice, setPlayerChoice] = useState(null);
  const [showExcessAlert, setShowExcessAlert] = useState(false);
  const [showVoidAlert, setShowVoidAlert] = useState(false);
  const [showNaNAlert, setShowNaNAlert] = useState(false);

  const handleChange = (event) => {
    setPlayerChoice(event.target.value);
  };

  function onlyDigits(string) {
    for (let i = string.length - 1; i >= 0; i -= 1) {
      const d = string.charCodeAt(i);
      if (d < 48 || d > 57) return false;
    }
    return true;
  }

  return (
    <div className={styles.background}>
      <div className={styles.quantitymodal}>
        <h3>How much of these items would you like to sell ?</h3>
        <div>
          <form>
            <div className={styles.inputcontainer}>
              <input
                className={styles.input}
                id="quantity"
                name="quantity"
                type="text"
                maxLength={5}
                defaultValue=""
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="button-confirm"
              onClick={(e) => {
                e.preventDefault();
                if (
                  playerChoice === "" ||
                  playerChoice === null ||
                  playerChoice === "0"
                ) {
                  setShowVoidAlert(true);
                  setTimeout(() => setShowVoidAlert(false), 2000);
                } else if (onlyDigits(playerChoice) === false) {
                  setShowNaNAlert(true);
                  setTimeout(() => setShowNaNAlert(false), 2000);
                } else if (playerChoice > selectedItem.possessed) {
                  setShowExcessAlert(true);
                  setTimeout(() => setShowExcessAlert(false), 2000);
                } else {
                  setShowQuantityModal(false);
                  setItemQuantity(playerChoice);
                  setIsItemSelected(true);
                }
              }}
            >
              Confirm
            </button>
          </form>
          <button
            type="button"
            onClick={() => {
              /* On fait disparaître la modale et on retourne à l'inventaire */
              setShowQuantityModal(false);
            }}
            className="button-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      {showExcessAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar ? avatar.img : defaultAvatar} alt="avatar" />
          <h4>
            {" "}
            Not enough <br /> items !
          </h4>
        </div>
      ) : null}
      {showVoidAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar ? avatar.img : defaultAvatar} alt="avatar" />
          <h4>
            {" "}
            You proposed <br /> nothing !
          </h4>
        </div>
      ) : null}
      {showNaNAlert ? (
        <div className={styles.alertmodal}>
          <img src={avatar ? avatar.img : defaultAvatar} alt="avatar" />
          <h4>
            {" "}
            You must only <br /> use digits.
          </h4>
        </div>
      ) : null}
    </div>
  );
}

TradeQuantityModal.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf.isRequired,
    possessed: PropTypes.number.isRequired,
  }).isRequired,
  setShowQuantityModal: PropTypes.func.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  setIsItemSelected: PropTypes.func.isRequired,
};
