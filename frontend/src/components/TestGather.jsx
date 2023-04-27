import { useGatherContext } from "../contexts/GatherContext";

export default function TestGather() {
  const { setGatherScreen } = useGatherContext();
  return (
    <div>
      testGather
      <button type="button" onClick={() => setGatherScreen("recap")}>
        click
      </button>
    </div>
  );
}
