import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/CartSlice';

const AddedCartItems = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    let id = e.target.dataset.id; 
    dispatch(addToCart(id));
  };

  const handleRemoveFromCart = (e) => {
    let id = e.target.dataset.id; 
    dispatch(removeFromCart(id));
  };
  return (
    <div className="bg-gray-700 my-4 flex text-white py-2 rounded-sm">
      <div className="w-1/2 h-16 flex flex-col justify-between px-4">
        <h4 className="text-lg font-semibold">{props.data.title}</h4>
        <span className="font-semibold">x{props.data.qty}</span>
      </div>
      <div className="w-1/2 text-right flex flex-col justify-between px-4">
        <p className="font-semibold text-lg">
          ${props.data.price * props.data.qty}.00{' '}
          <span className="text-sm">(${props.data.price}.00/item)</span>
        </p>
        <div>
          <button className="border rounded-sm px-4 mx-2 cursor-pointer" data-id={props.data.id} onClick={handleRemoveFromCart}>
            -
          </button>
          <button className="border rounded-sm px-4 cursor-pointer" data-id={props.data.id} onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default AddedCartItems;
