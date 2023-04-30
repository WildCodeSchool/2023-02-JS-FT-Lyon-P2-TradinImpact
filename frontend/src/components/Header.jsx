import PropTypes from "prop-types";
import styles from "./Header.module.css";

export default function Header({ moraCount, playerName }) {
  return (
    <div className={styles.header}>
      <div className={styles.avatar} id="avatar">
        <img src="src\assets\avatar-default.png" alt="avatar" />
      </div>
      <div className={styles.playerName}>{playerName}</div>
      <div className={styles.moraCount}>
        <h3>{moraCount}</h3>
        <img src="src\assets\mora-coin.png" alt="mora coin" />
      </div>
    </div>
  );
}

Header.propTypes = {
  moraCount: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
};
