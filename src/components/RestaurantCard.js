import { URL_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-[240px] rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 hover:shadow-lg ">
      <img className=" rounded-md h-36 w-56 " src={URL_IMG + cloudinaryImageId} alt="No Image" />
      <h4 className="font-bold py-2 text-md text-pretty"> {name}</h4>
      <h4 className="text-slate-400 text-ellipsis overflow-hidden whitespace-nowrap">{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating} Star  •  {deliveryTime} mins</h4>
       
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
