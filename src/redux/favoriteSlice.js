import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: []
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favorites.find(elem => {
        return elem.title === action.payload.title; 
      });
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(elem => {
        return elem.title !== action.payload.title;
      });
    }
  }
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
