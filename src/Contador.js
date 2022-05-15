import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {increment} from "./state/slices/counter/counterSlice"


const Contador = () => {

    const dispatch = useDispatch();

    const state = useSelector(state=>state)
    const {counter} = state
    console.log(counter);


    const handleIncrement = ()=>{
        dispatch(increment());
    }


    return (
            <div>
            <h2>Contador manetniendo el estado con el toolkit de redux</h2>

            <h3>valor contador: {counter.value}</h3>
            <button onClick={handleIncrement}>aumentar</button>

            
        </div>
    )
}

export default Contador;