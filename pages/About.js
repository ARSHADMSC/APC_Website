// import "bootstrap/dist/css/bootstrap.min.css";
import "./pagestyle.css";
import ab1 from "../image/OBJECTS.jpg";
import ab2 from "../image/Group _421.jpg";
import Gallery from "./Gallery";

export default function About() {
 
  return (
    <>
    <section className="about">
      <div className="container mt-5" id="form">
        <h1 className="text-center" id="abouth">About Us</h1>
        <div className="aabb text-center">
          <u id="abt-unl"><h3 id="apc">About APC</h3></u>
          <h3 id="vision">Our vision</h3>
        </div>
        <div className="about_left">
          <img src={ab1} alt=""></img>
        </div>
        <div className="about_mid">
          <p>Planet Araia was established in 2012,and it was a small faciluty and it was converted for a mixed <br/>
          limited liability company in the year 2020 under the name.The Arabian planet Company the head<br/>
          office is located in Saudi Arabia, AI-Jawt Sakaka region.Its establishment in the company specializes <br/>
          &nbsp&nbsp&nbsp&nbsp&nbsp in operating restaurants,Fast Food,beverage outlets and activities kofi kiosks.</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <p>&nbsp Over the course of a limited time the company has succeeded in building a leading and reliable<br/>
          brand.We beleve that the main reason behind our success is our ability to effectively communicate<br/>
          &nbsp&nbsp&nbspwith our customers,which helps us cater to their diffrent needs,tastes and lifestyles.</p>
        </div>
        <div className="about_right">
          <img src={ab2} alt=""></img>
        </div>
      </div>
      <Gallery />
      </section> 
    </>
  );
}
