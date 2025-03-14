import React from 'react';
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../../redux/slices/CartSlice';


const CartItemList = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) =>{
    let id = e.target.dataset.id;
    // console.log(id);
    dispatch(addToCart(id))
  }
  return (
    <div className="bg-white px-6 py-4 rounded-sm w-100 my-2">
      <div className="flex justify-between">
        <h4 className="text-lg font-semibold">{props.data.title}</h4>
        <button className="">${props.data.price}</button>
      </div>
      <p className="font-normal my-2">{props.data.description}</p>
      <div className="text-right">
        <button
          type="button"
          className="border border-blue-400 rounded-sm px-2 cursor-pointer py-1 text-blue-400 font-semibold"
          data-id={props.data.id}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartItemList;
