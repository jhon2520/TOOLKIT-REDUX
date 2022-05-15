import { createSlice } from "@reduxjs/toolkit";

const initState ={
    value:0
}


export const counterSlice = createSlice({

    name:"counter",
    initialState:initState,
    reducers:{
        increment:(state)=>{
            state.value += 1
        }
    }

})

export const {increment} = counterSlice.actions;