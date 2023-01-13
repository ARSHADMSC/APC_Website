 import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import logo1 from "../image/Group_15.jpg";
import snap from "../image/snapchat.jpg";
import twitter from "../image/circletwitter.jpg";
import facebook from "../image/facebook.jpg";
import instagram from "../image/Subtraction 2.jpg";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
         <img className="logo" src={logo1} alt=""/>

        <button
          class="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link text-black" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black" to="/about">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black" to="/ourbusinuss">
                Our Businusses
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black" to="/gallery">
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black" to="/updates">
                Latest Updates
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
         <div className="nav_rig"> 
          <button type="submit" id="nav-eng">English</button>&nbsp;
          <img src={snap}></img>&nbsp;&nbsp;
          <img src={twitter}></img>&nbsp;&nbsp;
          <img src={facebook}></img>&nbsp;&nbsp;
          <img src={instagram}></img>&nbsp;&nbsp;
          </div>
        </div>
      </nav>
    </>
  );
}
