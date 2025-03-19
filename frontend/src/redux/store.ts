import { configureStore } from "@reduxjs/toolkit";
import apiFoundSlice from './api/apiFoundSlice'
import apiLostSlice from './api/apiLostSlice'
import apiUserSlice from './api/apiUserSlice'
import apiSlice from "./api/apiSlice";

const store=configureStore({
    reducer:{
        [apiUserSlice.reducerPath]:apiSlice.reducer,
        [apiLostSlice.reducerPath]:apiSlice.reducer,
        [apiFoundSlice.reducerPath]:apiSlice.reducer,

    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware)

})

export default store