import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive:false
};

const moreInfoSlice = createSlice({
  name: 'moreInfo',
  initialState,
  reducers: {
    change:(state)=>{
        state.isActive=!state.isActive
    }
  }
});

export const { change } = moreInfoSlice.actions;
export default moreInfoSlice.reducer;
