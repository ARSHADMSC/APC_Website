import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row } from "react-bootstrap";
import "./pagestyle.css";
import img1 from "../image/home.jpg";
import img2 from "../image/Group_418.jpg";
import About from "./About";

export default function Home() {
  return (
    <>
    <section className="Container">
        <div className="hhome">
          <h6 id="welcome" className="text-primary mb-20">
            CAFETERIA
          </h6>
          <h3>A place for everyone<br/>made with<span id="col1"> care</span> and<br/> with <span id="col2">love.</span></h3>
        <p id="p1">Donec leo mi ut ac tristique egel elementum vitae ut.<br/>In quisque justo quis parturient viverra morbi.</p>
        <div class="home-btn">
          <button type="submit" onChange="home()">find One Near You</button>
          </div>
        <img src={img2} alt=""></img>
        </div>
        <div className="right">
          <img src={img1} alt=""></img>
        </div>
      <About />
      </section>
  
    </>
  );
}
