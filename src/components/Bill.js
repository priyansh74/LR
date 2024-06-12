
const Bill = ({total}) => {
 
    let totalPrice = 0;
    
    total.map((index) => (
        totalPrice = totalPrice + parseInt(index.card.info.price || index.card.info.defaultPrice)
     ));
    
  return (
    <div className="m-4 p-4">
       {total.length != 0 && <h1 className="font-bold ">Total Bill : ₹ {totalPrice/100}</h1>}
      
    </div>
    
  )
}

export default Bill