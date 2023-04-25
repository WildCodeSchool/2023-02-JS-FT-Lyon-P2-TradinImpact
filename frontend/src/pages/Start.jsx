import { Link } from "react-router-dom";

export default function Start() {
  return (
    <>
      <h1>START THE GAME</h1>
      <Link to="/home">
        {" "}
        <button type="button">Go !</button>
      </Link>
    </>
  );
}
