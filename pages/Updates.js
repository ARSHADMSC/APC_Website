import React from 'react';
import gal1 from "../image/NoPath.jpg";
import gal3 from "../image/NoPath.jpg";
import map from "../image/map.jpg";
import Contact from './Contact';


export default function Updates() {
  return (
    <>
    <section className='updates'>
      <div className="container mt-5" id="form">
        <div className='update-main'>
        <p className="text-center">UPDATES</p>
        </div>
        <div>
        <h1 className="text-center">Latest News And Updates</h1><br/>
        </div>
        <div>
        <p className='text-center'>stay informed about The Latest Happening At Our Company,Including New Products,Events,And<br/>
         Other important announcement.Thanks for Visiting!</p>
         </div>
        <div className='updated_im'>
          <div className='first'>
            <div className='top1'><p>26 sep</p>
            <h4>We Belive in imparting personalized<br/>education</h4>
            <p>Donec leo mi ut ac tristique eget elementum vitae ut.<br/>
            In quisque justo quis parturlent viverra marbi.....</p>
            </div>
          <img src={gal1}></img>&nbsp;&nbsp;
          </div>
          {/* <div>
          <img src={gal1}></img>&nbsp;&nbsp;
          </div> */}
          <div className='first'>
            <div className='top1'><p>26 sep</p>
            <h4>We Belive in imparting personalized<br/>education</h4>
            <p>Donec leo mi ut ac tristique eget elementum vitae ut.<br/>
            In quisque justo quis parturlent viverra marbi.....</p>
            </div>
          <img src={gal1}></img>&nbsp;&nbsp;
          </div>
          <div className='first'>
            <div className='top1'><p>26 sep</p>
            <h4>We Belive in imparting personalized<br/>education</h4>
            <p>Donec leo mi ut ac tristique eget elementum vitae.</p>
            </div>
          <img src={gal1}></img>&nbsp;&nbsp;
          </div>

          
          
        </div> 
        </div>
      </section>
      <section className='updates'>
        <div className="map">
          <img src={map} alt=""></img>
       </div>
       </section>
       <Contact />
    
  
  </>
  );
}

