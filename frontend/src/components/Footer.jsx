import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.gamepickcontainer}>
      <div className={styles.icon} id="collect-icon">
        <img src="./src/assets/basket.png" alt="collect icon" />
      </div>
      <div className={`${styles.icon} ${styles.active}`} id="trade-icon">
        <img
          className={styles.activeImg}
          src="./src/assets/bourse2.png"
          alt="trade icon"
        />
      </div>
      <div className={styles.icon} id="fight-icon">
        <img src="./src/assets/sword-icon.png" alt="combat icon" />
      </div>
    </div>
  );
}
