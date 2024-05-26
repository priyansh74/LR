import { useEffect,useState } from "react";

const useOnlineStatus = () => {
    
    const [onlineStatus,setOnlineStatus] = useState(true);
    //check if online
   useEffect(() => {
        console.log(onlineStatus);
        window.addEventListener("offline",() => {
             setOnlineStatus(false);
        });

        window.addEventListener("online",() => {
            setOnlineStatus(true);
       });

   },[])

    //boolean
    return onlineStatus;
}

export default useOnlineStatus;

