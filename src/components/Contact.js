import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Contact = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
       <div className="">
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page, (Hi  {loggedInUser} )</h1>
        <form>
         <input type="text" className="border border-black p-2 m-2" placeholder="Name" />
         <input type="text" className="border border-black p-2 m-2" placeholder="Message" />
         <button className="border border-black rounded-lg p-2 m-2 bg-gray-200">Submit</button>
         </form>
       </div>
    );
};

export default Contact;