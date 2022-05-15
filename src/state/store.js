import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { listSlice } from "./slices/listSlice.js/listSlice";


const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        list:listSlice.reducer
    }
})


export default store;