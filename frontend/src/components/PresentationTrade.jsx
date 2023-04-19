import "../styles/PresentationTrade.css";

export default function PresentationTrade() {
  return (
    <div className="presTrade">
      <div className="presTradeText">
        <p>What would you like to do ?</p>
      </div>
      <button type="button" className="presTradeButtons">
        Buy
      </button>
      <button type="button" className="presTradeButtons">
        Sell
      </button>
    </div>
  );
}
