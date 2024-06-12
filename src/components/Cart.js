import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import Bill from "./Bill";

const Cart = () => {
   
    //we can subscribe to it to use the data for the cart items
   // const cartItems = useSelector((store) => store.cart.items);
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
           dispatch(clearCart());
    }
  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto"> 
              <button className="p-2 m-2 bg-gray-600 text-white rounded-lg"
               onClick={handleClearCart}
              > Clear Cart</button> 
              <Bill total={cartItems}/>
              {cartItems.length === 0 && <h1> Cart is empty, add items to the cart!</h1>}
              <ItemList items={cartItems}/>
              
        </div>
    </div>
  )
}

export default Cart;