import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAvatarContext } from "../contexts/AvatarContext";
import styles from "./Start.module.css";
import AvatarModal from "../components/AvatarModal";

export default function Start({ playerName, setPlayerName }) {
  const { avatar } = useAvatarContext();
  const [clickMora, setClickMora] = useState(false);
  const [start, setStart] = useState(true);
  const [story, setStory] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const handleChangeAvatar = () => {
    setShowAvatarModal(true);
  };

  const handleClickStart = () => {
    setClickMora(true);
    setTimeout(() => {
      setStart(false);
      setStory(true);
    }, 1200);
  };

  if (start === true) {
    return (
      <section className={styles.start}>
        <h1>Tradin' Impact</h1>
        <button
          type="button"
          className={clickMora === true ? styles.startAnim : null}
          onClick={handleClickStart}
        >
          <img src="/src/assets/mora-coin.png" alt="mora coin start button" />
        </button>
        <p>Tap the mora to play</p>
      </section>
    );
  }

  if (story === true) {
    return (
      <div className={styles.story}>
        {showAvatarModal ? (
          <AvatarModal setShowAvatarModal={setShowAvatarModal} />
        ) : null}
        <p>
          A long time ago, in a galaxy far, far away... <br />
          <br />
          You woke up and felt the urge to buy a home. <br />
          <br />
          For that, you'll need to save 1000{" "}
          <span>
            <img
              className={styles.mora}
              src="/src/assets/mora-coin.png"
              alt="mora coin"
            />
          </span>
          , so you start collecting all the items lying around and selling them
          away to get yourself that home sweet home.
        </p>
        <form>
          <label htmlFor="playername">
            Enter your name and select your avatar
          </label>
          <div className={styles.selectors}>
            <button
              type="button"
              className={styles.avatar}
              onClick={handleChangeAvatar}
            >
              <img
                className={styles.avatar}
                src={avatar ? avatar.img : "src/assets/avatar-default.png"}
                alt="avatar"
              />
            </button>
            <input
              type="text"
              name="playername"
              maxLength={12}
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <Link to="/home">
            <button
              className={styles.startButton}
              type="submit"
              disabled={playerName === ""}
              onSubmit={(e) => e.preventDefault()}
            >
              Start your journey
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Start.propTypes = {
  playerName: PropTypes.string.isRequired,
  setPlayerName: PropTypes.func.isRequired,
};
