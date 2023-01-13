import React from 'react';
import bus1 from "../image/nathan-dumlao-2z3MOB3kfJU-unsplash.jpg";
import bus2 from "../image/zarak-khan-69ilqMz0p1s-unsplash.jpg";
import Updates from './Updates';
 export default function Gallery() {
  return (
    <>
    <section className="businuss">
    <div className="container mt-5" id="form">
    <p className="text-center" id="galcolr">GALLERY</p>
    <h1 className="text-center">Explore Arabian Planet</h1>
    <p className="text-center">Welcome to our Photo And Video Gallery!See A selection Of Our Finest Work And Learn About The<br/>
    Range Of Services We Offer.Captiring Your Special Moments With Expertise nd The Latest<br/>
    Equipment.Enjoy Browsing!</p>
    <div>
      <img src={bus1} alt=""></img>&nbsp;&nbsp;
      <img src={bus1} alt=""></img>&nbsp;&nbsp;
      <img src={bus2} alt=""></img>
      
    </div>
    <div >
        <button className="button-center">Explore More</button>
    </div>



    </div>
    <Updates />
    </section>
    </>
  )
}



