import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../utils/cartItems/cartItems';

const initialState = {
  showCart: false,
  totalCartItem: 0,
  addedCartItemsList: { 
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    addToCart: (state, action) => {
      let id = action.payload;

      if (state.addedCartItemsList[id]) {
        state.addedCartItemsList[id].qty += 1;
      } else {
        let newItem = { ...cartItems[id], qty: 1 }; 
        state.addedCartItemsList[id] = newItem;
      }
      state.totalCartItem += 1;
     
    },
    removeFromCart: (state, action) => {
      let id = action.payload;
      state.addedCartItemsList[id].qty -= 1;
      if(state.addedCartItemsList[id].qty == 0){
        delete state.addedCartItemsList[id];
      }
      state.totalCartItem -= 1;
    },
  },
});

export const { setShowCart,addToCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
