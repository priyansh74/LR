import React from "react";

//class based component
class UserClass extends React.Component {
  
  //to recive props  
  constructor(props){
       super(props);

       //creating state variables;
       this.state = {
        userInfo:{
          name: "Dummy name",
          location: "Default",
          bio: "dummy bio",
          avatar_url: "https://dummy-photo.com",
        },
       };
     //  console.log("Child Constructor");
  } 

  async componentDidMount(){
   // console.log("Child Component Did mount");
   //api call

   const data = await fetch("https://api.github.com/users/priyansh74");
   const json = await data.json();

   this.setState({
    userInfo:json,
   });
   //console.log(json);
}

    //render method returns some jsx
  render() {
    
    //destr
    const {name,location,bio,avatar_url} = this.state.userInfo;

   // console.log("Child render");

    return (
      <div className="user-card">
       
      <img className="github-img" src={avatar_url} alt="photo" />
        <h2>Name :  {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio : {bio}</h4>
         
      </div>
    );
  }
}

export default UserClass;
