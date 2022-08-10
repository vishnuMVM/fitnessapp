import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar (){
    return(
        <div className="navbar-container">
            <div>
                <img className="logo-img" src="https://en.pimg.jp/062/835/873/1/62835873.jpg" alt="logo"/>
            </div>
            <div className="li-container">
                <Link to="/" className="link">Home</Link> 
                <Link to="/aboutus" className="link">About Us</Link> 
                <Link to="/contact" className="link">Contact</Link>   
            </div>

        </div>
       
    )
}
export default Navbar;