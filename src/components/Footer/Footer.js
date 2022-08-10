import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main-container">

    
    <div className="footer-container">
      <div class="footer-logo-container">
          <img class="logo-img ml-auto" src="https://en.pimg.jp/062/835/873/1/62835873.jpg" alt=".." />
          <p>
            D.No 16-11-511/c/27,<br/>
            Shalivahana nagar,Moosarambagh,<br/>
            Malakpet,HyderabadTelangana 500036
            <br/>
          </p>
      </div>

      <div className="footer-second-half">
        <div className="footer-second-half-element">
          <h1 class="heading">Srikalahasthi Fitness Center</h1>
          <div>
            <p>
              <Link to="/">
                Home
              </Link>
            </p>

            <p>
              <Link to="/submitform">
                Submit Form
              </Link>
            </p>

            <p>
              <Link to="/aboutus">
                About Us
              </Link>
            </p>

            <p>
              <Link to="/contact">
                Contact
              </Link>
            </p>
          </div>
        </div>
        <br/><br/><br/>

        <div>
          <h1 class="heading">Our Services</h1>
          <p class="paragraph text-left">Small Group Personal Training</p>
          <p class="paragraph text-left ">Personal Training</p>
          <p class="paragraph text-left">nutrition Coaching</p>
          <p class="paragraph text-left">Online Training</p>
        
      </div>
      </div>
      
      
    </div>
    <hr class="line" />
        <p class="paragraph text-center">© Srikalahasthi Fitness Center</p>
    </div>
  );
}
