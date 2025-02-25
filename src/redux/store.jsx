import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "./counterSlice";
import producrReducer from "./cartSlice"
const myStore=configureStore({
    reducer:{
           "counter": counterreducer,
           "products":producrReducer
    }
})

export default myStore;