import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowCart } from '../../redux/slices/CartSlice';

const CartButton = () => {
  const totalCartItem = useSelector((state)=>state.cart.totalCartItem);
  const dispatch = useDispatch();
  return (
    <button type='button' className='border-1 rounded-sm font-semibold py-2 px-6 cursor-pointer text-white hover:border-gray-500 transition duration-300 ease-in-out' onClick={()=>dispatch(setShowCart())}>My Cart <span className='mx-2 py-1 px-4 bg-gray-600 rounded-2xl'>{totalCartItem}</span></button>
  )
}

export default CartButton