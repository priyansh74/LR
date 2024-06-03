import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Contact = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
       <div className="font-bold">
        <h1>Contact Us Page</h1>
        <h2>{loggedInUser}</h2>
       </div>
    );
};

export default Contact;