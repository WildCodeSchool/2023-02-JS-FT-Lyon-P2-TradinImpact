import PropTypes from "prop-types";
import styles from "./Merchant.module.css";

export default function Merchant({ portrait }) {
  return (
    <div className={styles.merchant}>
      <img src={portrait} alt="Merchant" />
    </div>
  );
}

Merchant.propTypes = {
  portrait: PropTypes.string.isRequired,
};
