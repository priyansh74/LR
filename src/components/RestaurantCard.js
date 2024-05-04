import { URL_IMG } from "../utils/constants";


const RestaurantCard = (props) =>{
    const {resData} = props;
 
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    
    
   return(
     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
       <img className="res-logo" src={URL_IMG +cloudinaryImageId}/>
       <h4> {name}</h4>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating} Star</h4>
       <h4>{deliveryTime} mins</h4> 
       <h4>{costForTwo}</h4>
      </div>
   )
 };
 export default RestaurantCard;