import { Link } from "react-router-dom";
import "../style/Start.css";

export default function Start() {
  return (
    <>
      <section className="start" >
        <h1 id="title">Tradin'<br></br>Impact</h1>
        
          <div>
            <Link to="/home">
            <img src="/src/assets/mora-coin.png" alt="Button Moras" id="button" />
            </Link>
          </div>
        <p id="instruction">Tape the <br></br> mora to <br></br> play<br></br>______</p>
      </section>
    </>
  );
}
