import React from 'react'
import Navbar from '../../layouts/Navbar/Navbar'
import CartItem from '../../components/Cart/CartItem'

const CartPage = () => {
  return (
    <div className='bg-gray-800 h-screen w-screen flex flex-col items-center'>
      <Navbar />
      <CartItem />
    </div>
  )
}

export default CartPage