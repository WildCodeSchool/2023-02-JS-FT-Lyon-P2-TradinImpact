import PropTypes from "prop-types";
import { useAvatarContext } from "../contexts/AvatarContext";
import styles from "./Header.module.css";
import defaultAvatar from "../assets/avatar-default.png";
import mora from "../assets/mora-coin.png";

export default function Header({
  moraCount,
  playerName,
  gameMode,
  setShowEncyclopedia,
  showEncyclopedia,
}) {
  const { avatar } = useAvatarContext();
  let avatarStyle = styles.avatar;

  const handleClickAvatar = () => {
    if (showEncyclopedia) {
      setShowEncyclopedia(false);
    } else if (showEncyclopedia === false) {
      setShowEncyclopedia(true);
    }
  };

  if (gameMode === "trade") {
    avatarStyle = styles.tradeAvatar;
  } else if (gameMode === "combat") {
    avatarStyle = styles.combatAvatar;
  } else if (gameMode === "gather") {
    avatarStyle = styles.gatherAvatar;
  }

  return (
    <div className={styles.header}>
      <button
        onClick={handleClickAvatar}
        type="button"
        className={avatarStyle}
        id="avatar"
      >
        <img src={avatar ? avatar.img : defaultAvatar} alt="avatar" />
      </button>
      <div className={styles.playerName}>{playerName}</div>
      <div className={styles.moraCount}>
        <h3>{moraCount}</h3>
        <img src={mora} alt="mora coin" />
      </div>
    </div>
  );
}

Header.propTypes = {
  moraCount: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
  gameMode: PropTypes.string.isRequired,
  setShowEncyclopedia: PropTypes.func.isRequired,
  showEncyclopedia: PropTypes.bool.isRequired,
};
