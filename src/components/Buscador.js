import React from 'react'
import { toast } from 'react-toastify';
import {useNavigate, useLocation} from 'react-router-dom'

const Buscador = () => {

    const navigate = useNavigate()
    const location = useLocation();
    
    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        
        if(keyword.length === 0){
            toast.error('Tienes que ingresar una palabra clave', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if(keyword.length < 3){
            toast.error('La palabra tiene que tener 3 o mas caracteres', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else {
            
            navigate(`/resultados?keyword=${keyword} ` );
            navigate(0)
            e.currentTarget.keyword.value = "";
        }
    }   

  return (
    <form onSubmit={submitHandler} className='d-flex align-items-center'>
        <label className='form-label mb-0 mx-2'>
            <input className='form-control' type="text" name="keyword" placeholder='Buscar...'/>
        </label>
        <button className='btn btn-success' type='submit'>Buscar</button>
  </form>
  )
}

export default Buscador