import { URL_IMG } from "../utils/constants";
const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      
        {/*for each item i will return an div.*/}
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
           
            
         <div className="w-8/12">
            <div className="py-2">
              <span>{item.card.info.name + " - "} </span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
           </div>
           <div className="w-3/12 p-4">
            <div className="absolute">
            <button className="px-8 py-1 bg-white text-l text-green-500 shadow-2xl mx-6 my-24 rounded-md hover:bg-gray-200">ADD  </button>
            </div>
            <img className="h-28 w-36" src={URL_IMG + item.card.info.imageId} />
           
            </div>
          </div>
        ))}
      
    </div>
  );
};

export default ItemList;
