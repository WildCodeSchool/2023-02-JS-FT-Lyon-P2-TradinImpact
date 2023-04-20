import "../styles/PresentationTrade.css";

export default function PresentationTrade() {
  return (
    <div className="presTrade">
      <div className="info-trade">
        <p>What would you like to do ?</p>
      </div>
      <div>
        <button type="button" className="button-trade">
          Buy
        </button>
        <button type="button" className="button-trade">
          Sell
        </button>
      </div>
    </div>
  );
}
