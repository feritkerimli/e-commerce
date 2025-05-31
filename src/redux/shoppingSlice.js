import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingProducts: []
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addShoppingCart: (state, action) => {
      const exists = state.shoppingProducts.find(elem => elem.title === action.payload.title);
      if (!exists) {
        state.shoppingProducts.push({ ...action.payload, count: 1 });
      }
    },
    deleteShoppingCart: (state, action) => {
      state.shoppingProducts = state.shoppingProducts.filter(elem => elem.title !== action.payload.title);
    },
    increaseCount: (state, action) => {
      const item = state.shoppingProducts.find(elem => elem.title === action.payload.title);
      if (item) {
        if(item.count < item.stock){
          item.count += 1;
        }
      }
    },
    decreaseCount: (state, action) => {
      const item = state.shoppingProducts.find(elem => elem.title === action.payload.title);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    }
  }
});

export const { addShoppingCart, deleteShoppingCart, increaseCount, decreaseCount } = shoppingSlice.actions;
export default shoppingSlice.reducer;
