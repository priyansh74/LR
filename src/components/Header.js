import { URL_LOGO } from "../utils/constants";
import { useState } from "react";
const Header = () => {

  const [btnName,setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={URL_LOGO} alt="Web-icon" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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