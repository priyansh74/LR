import { URL_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const [btnName,setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={URL_LOGO} alt="Web-icon" />
        </div>
        <div className="nav-items">
          <ul>
            <li> <Link to={"/"}>Home</Link></li>
            <li> <Link to={"/about"}>About Us</Link></li>
            <li> <Link to={"/contact"}>Contact Us</Link></li>
            <li>Cart</li>
            <button  onClick={()=>{
              btnName === "Login" ? setBtnName("Logout") : (setBtnName("Login"));
            }} 
            className="login">{btnName}
            </button>
          </ul>
        </div>
  
      </div>
    );
  };

  export default Header;