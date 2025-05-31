import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive:false
};

const loginRegisterSlice = createSlice({
  name: 'loginRegister',
  initialState,
  reducers: {
    change:(state)=>{
        state.isActive=!state.isActive
    }
  }
});

export const { change } = loginRegisterSlice.actions;
export default loginRegisterSlice.reducer;
