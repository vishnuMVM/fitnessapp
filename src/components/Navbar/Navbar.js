import {Link} from "react-router-dom";
import "./Navbar.css";
import { Component } from "react";









class Navbar extends Component{
    state={sidebar:false}

    Sidebartoggle=()=>{
        this.setState((prevState)=>{  
            let sidebar=!prevState.sidebar;
            return{sidebar,};
})
    }


    
    render(){
    const {sidebar} =this.state;

        return(
            <div>
             <div className="header-container header-desktop">
                 <div className="header-image-container">
                     <div className="image-container">
                        <Link to="/"> <img src="https://en.pimg.jp/062/835/873/1/62835873.jpg" alt="header_image" className="header-image"/> </Link>
                     </div>
         
                     <div>
                     <h4> FITNESS CENTER <br/> SRIKALAHASTHI  </h4>
                     </div>
                 </div>
         
                 <div className="header-list-selection-container">
                     <div>
                         <ul className="header-list-items-container">
                             <li><Link className="header-list-item" to="/">Home</Link></li>
                             <li><Link className="header-list-item" to="/about">About</Link></li>
                             <li><Link className="header-list-item" to="/contact">Contact</Link></li>
                         </ul>
                     </div>
                 </div>
             </div>
         
         
             <div className="header-mobile">
                 <div className={sidebar?"sidebar_display":"sidebar_hide"}>
                     <div className="sidebar-container">
                            <p> <Link className="header-list-item" to="/">Home</Link></p>
                            <p> <Link className="header-list-item" to="/about">About</Link></p>
                            <p><Link className="header-list-item" to="/contact">Contact</Link></p>
                     </div>
                 </div>
         
             <div className="header-container">
                 <div className="header-image-container">
                     <div className="image-container">
                     <Link to="/">  <img src="https://en.pimg.jp/062/835/873/1/62835873.jpg" alt="header_image" className="header-image"/> </Link>
                     </div>
         
                     <div>
                     <h5> FITNESS CENTER <br/> SRIKALAHASTHI </h5>

                     </div>
                 </div>
         
                 <div className="header-list-selection-container">
                     <div>
                         <button onClick={this.Sidebartoggle} className="header-button" > <i class="fas fa-bars"></i></button>
                     </div>
                 </div>
             </div>
         
         
             </div>
         
         </div>
         
         
         )
         

    }
}






export default Navbar;