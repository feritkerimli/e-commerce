import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive:false
};

const buySlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    change:(state)=>{
        state.isActive=!state.isActive
    }
  }
});

export const { change } = buySlice.actions;
export default buySlice.reducer;
