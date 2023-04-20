import "../styles/Header.css";
import PropTypes from "prop-types";

export default function Header({ moraCount }) {
  return (
    <div id="header">
      <div id="avatar">
        <img src="src\assets\avatar-default.png" alt="avatar" />
      </div>
      <div id="mora-count">
        <h3>{moraCount}</h3>
        <img src="src\assets\mora-coin.png" alt="mora coin" />
      </div>
    </div>
  );
}

Header.propTypes = {
  moraCount: PropTypes.number.isRequired,
};
