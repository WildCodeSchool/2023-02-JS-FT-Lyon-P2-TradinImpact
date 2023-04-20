import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="gamepickcontainer">
      <div className="icon" id="collect-icon">
        <img src="./src/assets/panier-en-osier.png" alt="collect icon" />
      </div>
      <div className="icon active" id="trade-icon">
        <img
          className="active-img"
          src="./src/assets/bourse2.png"
          alt="trade icon"
        />
      </div>
      <div className="icon" id="fight-icon">
        <img src="./src/assets/sword-icon.png" alt="combat icon" />
      </div>
    </div>
  );
}
