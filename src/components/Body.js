import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () => {
  //Local state variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
 // console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9834827&lng=77.75057269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
   // console.log(setListOfRestaurants);
  };

const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your Internet Connection</h1>

 
const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-16 py-8">
      <div className="filter flex">
        <div className="search my-4 mx-2 px-4 py-2">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search Restaurant Name"
            className="border border-solid border-black pr-14 pl-2 py-[6px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg hover:bg-gray-200"
            onClick={() => {
              console.log(searchText);
              //we are searching from untouched listOfRestaurants
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //but updating filteredRes state since, listoFRes should be kept safe for further use in search, or any feature.
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          onClick={() => {
            console.log(listOfRestaurants);
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.4
            );
            //setListOfRestaurants(filterdList);
            setFilteredRestaurant(filterdList); //makes for sense
            console.log(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
         <Link  key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
           
           {restaurant.info.veg ? (
           <RestaurantCardPromoted resData={restaurant}/>
          ) : (
            <RestaurantCard resData={restaurant} />)}
           
           </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
