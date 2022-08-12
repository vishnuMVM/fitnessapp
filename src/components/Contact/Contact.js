import "./Contact.css";
import Submit from "../Submit/Submit.js";
import Iframe from "react-iframe";


export default function Contact(){
    return(
        <div className="contact-main-container">
            
            <div>
                <div className="address">
                    <h1>Address</h1>
                    <h4>
                    <span>Fitness center</span>
                    <br />
                    <br />
                    D.No 16-11-511
                    <br />
                    <br />
                    Z.P.Boys High School
                    <br />
                    <br />
                    Srikalahasthi
                    <br />
                    <br />
                    Andhra pradesh
                    </h4>
                </div>
                
                <Iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124079.83130812534!2d79.35476010189473!3d13.627642647364382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1660239477214!5m2!1sen!2sin" 
                className="map-view"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/ >
  
            </div>
            <Submit/>
        </div>
    )
}