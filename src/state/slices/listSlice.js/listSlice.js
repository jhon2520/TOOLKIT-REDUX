import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    listado:["1","2","3"],
    mostrarLista:true,

}

export const listSlice = createSlice({
    name:"list",
    initialState,
    reducers:{
        addElement:(state,action)=>{
            state.listado.push(action.payload)
        },
        hideShowList:(state,action)=>{
            state.mostrarLista = action.payload
        }
    }
})


export const {addElement,hideShowList} = listSlice.actions;
