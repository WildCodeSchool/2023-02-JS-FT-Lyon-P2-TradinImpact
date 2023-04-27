import { useGatherContext } from "../contexts/GatherContext";
import PresentationGather from "./PresentationGather";
import TestGather from "./TestGather";
import GatherRecap from "./GatherRecap";

export default function Gather() {
  const { gatherScreen } = useGatherContext();

  if (gatherScreen === "presentation" || gatherScreen === "cooldown") {
    return <PresentationGather />;
  }
  if (gatherScreen === "test") {
    return <TestGather />;
  }
  if (gatherScreen === "recap") {
    return <GatherRecap />;
  }
}
