import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="gamepickcontainer">
      <div className="icon" id="collect-icon">
        <img src="./src/assets/panier-en-osier.png" alt="" />
      </div>
      <div className="icon" id="trade-icon">
        <img id="test" src="./src/assets/bourse2.png" alt="" />
      </div>
      <div className="icon" id="fight-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2457/2457005.png"
          alt=""
        />
      </div>
    </div>
  );
}
