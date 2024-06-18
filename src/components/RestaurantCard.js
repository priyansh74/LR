import { URL_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
 //console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[240px] rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 hover:shadow-lg ">
      <img className=" rounded-md h-36 w-56 " src={URL_IMG + cloudinaryImageId} alt="No Image" />
      <h4 className="font-bold py-2 text-md text-pretty"> {name}</h4>
      <h4 className="text-slate-400 text-ellipsis overflow-hidden whitespace-nowrap">{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating} Star  •  {deliveryTime} mins</h4>
       
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher order components (functions) -> A function that takes a component and return a component.
export const withPromotedLabel = (RestaurantCard) => {

  //the initilisation for the component happened like this Body.js : const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); //fn call returning a comp.
  //the props below is coming from the call here: <RestaurantCardPromoted resData={restaurant}/>
  return (props) => {
    return (
      <div>
        <label className="absolute  bg-slate-500 text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
export default RestaurantCard;
