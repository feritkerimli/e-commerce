import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from './favoriteSlice';
import shoppingSlice from './shoppingSlice'
import moreInfoSlice from './moreInfoSlice'
import loginRegisterSlice from './loginRegisterSlice'
import buySlice from './buySlice'
const store = configureStore({
    reducer:{
        myFavorite: favoriteSlice,
        myShoppingCart: shoppingSlice,
        myMoreInfo: moreInfoSlice,
        myLoginRegister: loginRegisterSlice,
        myBuy: buySlice
    }
})
export default store;