import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addElement,hideShowList } from './state/slices/listSlice.js/listSlice';


const Listado = () => {

  const dispacth = useDispatch();
  const {list} = useSelector((state)=> state)
  const {listado} = list
  const {mostrarLista} = list;

  console.log(mostrarLista);

  const handleAdd = ()=>{
    dispacth(addElement("nuevo elemento"))
  }

  const handleShowList =()=>{
    dispacth(hideShowList(!mostrarLista))
  }

  return (
    <div>
      {
        mostrarLista && listado.map((el,i)=>{
          return(
            <h2 key={i}>{el}</h2>
          )
        })
      }
      <button onClick={handleAdd}>Agregar elemento</button>
      <button onClick={handleShowList}>Ocultar lista</button>
      </div>

  )
}

export default Listado