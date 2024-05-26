import { useEffect,useState } from "react";
import { MENUAPI_URL } from "./constants";
const useRestaurantMenu = (resId) => {
  
    const [resInfo, setResInfo] = useState(null);
    //fetchData
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENUAPI_URL + resId);
        const json = await data.json();
        setResInfo(json?.data);
    };

   return resInfo;
};

export default useRestaurantMenu;
