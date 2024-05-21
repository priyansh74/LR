import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    //1
    constructor(props){
        super(props);
      //  console.log("Parent Constructor");
    }
    
    //3 -> triggered once render is fully completed, hence many use cases like api calls;
    componentDidMount(){
       // console.log("Parent Component Did mount");
    }
    
    //2
    render(){
       // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is an about page buddy</h2>
                <UserClass name={"Priyansh Jha (class-based-comp)"} location={"Bangalore CBC"}/>
            </div>
        );
    }
}
//1:11


export default About;