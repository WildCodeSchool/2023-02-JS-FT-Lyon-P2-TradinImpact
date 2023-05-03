import styles from "./Bargain.module.css";
import JanKenPon from "./JanKenPon";
import Merchant from "./Merchant";

export default function Bargain() {
  return (
    <div className={styles.bargain}>
      <Merchant />
      <JanKenPon />
    </div>
  );
}
