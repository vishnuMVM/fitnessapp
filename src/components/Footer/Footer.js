import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main-container">

    
    <div className="footer-container">
      <div class="footer-logo-container">
          <img class="footer-logo-img ml-auto" src="https://en.pimg.jp/062/835/873/1/62835873.jpg" alt=".." />
          <p className="para">
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
            <p className="para">
              <Link className="footer-link" to="/">
                Home
              </Link>
            </p>

            <p className="para">
              <Link className="footer-link" to="/aboutus">
                About Us
              </Link>
            </p>

            <p className="para">
              <Link className="footer-link" to="/contact">
                Contact
              </Link>
            </p>
          </div>
        </div>


        <div>
          <h1 class="heading">Our Services</h1>
          <p class="para text-left">Small Group Personal Training</p>
          <p class="para text-left ">Personal Training</p>
          <p class="para text-left">nutrition Coaching</p>
          <p class="para text-left">Online Training</p>
        
      </div>
      </div>
      
      
    </div>
    <hr className="line" />
        <p className="para text-center">© Srikalahasthi Fitness Center</p>
        <p className="para">Design and Developed by vishnuvardhan yellampati and lokesh dama</p>
    </div>
  );
}
