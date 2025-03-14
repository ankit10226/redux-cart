import React from 'react';
import { cartItems } from '../../utils/cartItems/cartItems';
import CartButton from './CartButton';
import CartItemList from './CartItemList';
import AddedCartItems from './addedCartItems';
import { useSelector } from 'react-redux';

const CartItem = () => {
  const {showCart,totalCartItem} = useSelector((state) => state.cart);
  const addedCartItemsList = useSelector((state) => state.cart.addedCartItemsList);
  
  return (
    <div>
      {(showCart && totalCartItem>0) && (
        <div className="bg-gray-900 px-2 py-2 rounded-sm w-100 my-2">
          <p className="text-white font-bold text-sm my-4">
            YOUR SHOPPING CART
          </p>
          {
            Object.keys(addedCartItemsList).map((key) => {
              return <AddedCartItems key={key} data={addedCartItemsList[key]}/>
            })
          }
        </div>
      )}

      <p className="text-white font-bold text-xl my-4 text-center">
        BUY YOUR FAVOURITE PRODUCT
      </p>
      {
        Object.keys(cartItems).map((key) => {
          return <CartItemList key={key} data={cartItems[key]} />
        })
      }
    </div>
  );
};

export default CartItem;
