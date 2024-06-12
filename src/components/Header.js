import { URL_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
  const {loggedInUser} = useContext(UserContext);
  
  //selector : basically a hook. come from react-redux (this hook gives us access to the store)
  //subscribing to the store using a Selector
   const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between bg-gray-50 shadow-md mb-2">
        <div className="logo-container">
          <img className="w-40 p-4 mx-8" src={URL_LOGO} alt="Web-icon" />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status: {onlineStatus ? "✅" :"🔴" }
            </li>
            <li className="px-4"> <Link to={"/"}>Home</Link></li>
            <li className="px-4"> <Link to={"/about"}>About Us</Link></li>
            <li className="px-4"> <Link to={"/contact"}>Contact Us</Link></li>
            <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
            <li className="px-4 font-bold text-l"> <Link to={"/cart"}>Cart - ({cartItems.length } items)</Link> </li>
            <button  onClick={()=>{
              btnName === "Login" ? setBtnName("Logout") : (setBtnName("Login"));
            }} 
            className="login bg-pink-200 px-8 ml-5 rounded-md">{btnName}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
  
      </div>
    );
  };

  export default Header;