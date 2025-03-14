import React from 'react'
import Logo from '../../components/Logo/Logo'
import CartButton from '../../components/Cart/CartButton'

const Navbar = () => {
  return (
    <nav className='w-screen h-18 bg-gray-900 flex justify-between items-center px-30'>
      <Logo /> 
      <CartButton />
    </nav>
  )
}

export default Navbar