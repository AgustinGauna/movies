import React,{useEffect} from 'react'
import axios from 'axios'
import {toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate()

  let token = localStorage.getItem('token');
  useEffect(()=> {

    if(token !== null){
        navigate('/listado');
    }
    },[])

  const submitHandler = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email === "" || password === ""){
      toast.warning("Los campos no pueden estar vacios")
      return
    }

    if(email !== "" && !regexEmail.test(email)){
      toast.warning("debes escribir una direccion de correo electronico valida")
      return
    }

    if(email !== "challenge@alkemy.org" || password !== "react"){
      toast.warning("Credenciales invalidas")
      return
    }

    axios.post('http://challenge-react.alkemy.org', {email, password})
          .then(res => {
            toast.success("Ingresaste correctamente!")
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido)
            navigate('/listado')
          })
    
  }


  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">
        <span>Correo electronico:</span> <br />
        <input placeholder='challenge@alkemy.org' type="email" name="email" />
      </label>
      <br />
      <label htmlFor="">
        <span>Contraseña:</span><br />
        <input placeholder='react' type="password" name="password" />
      </label>
      <br />
      <button type='submit'>Ingresar</button>
    </form>
  )
}

export default Login