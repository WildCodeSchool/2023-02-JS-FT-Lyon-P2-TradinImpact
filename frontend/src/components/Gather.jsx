import { useState } from "react";
import PresentationGather from "./PresentationGather";

export default function Gather() {
  const [gatherScreen, setGatherScreen] = useState("presentation");

  if (gatherScreen === "presentation") {
    return <PresentationGather setGatherScreen={setGatherScreen} />;
  }
}
