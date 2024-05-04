import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {

  //Local state variables
  const resList2 = resList;
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  
    return ( 
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onDoubleClick={() =>{
            setListOfRestaurants(resList2);
          }} 
          onClick={() => {
             const filterdList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
             setListOfRestaurants(filterdList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
          ))}
            
        </div>
      </div>
    )
  };

  export default Body;