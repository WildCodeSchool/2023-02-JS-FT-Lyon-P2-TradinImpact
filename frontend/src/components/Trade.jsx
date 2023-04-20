import { useState } from "react";
import PresentationTrade from "./PresentationTrade";
import Sell from "./Sell";

export default function Trade() {
  const [tradeScreen, setTradeScreen] = useState("presentation");

  if (tradeScreen === "presentation") {
    return (
      <PresentationTrade
        tradeScreen={tradeScreen}
        setTradeScreen={setTradeScreen}
      />
    );
  }
  return <Sell />;
}
