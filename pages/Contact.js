import React from 'react';

import "./pagestyle.css";

export default function Contact() {
  return (
    <>
     
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title text-center">Contact us</h2>
            <h2 class="title text-center">Get In Touch</h2>
            <center>
            <div class="contact-content">

                <div class="column right">
                    <form action="#">
                    <div class="field">
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Phone number" />
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email Address" />
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Type Your Message Here.." ></textarea>
                        </div>
                        <div class="button-area">
                           <button type="submit" onclick="contact()">submit</button>
                        </div>
                    </form>
                </div>
                
            </div>
            </center>
        </div>
    </section>
    </>
  );
}

