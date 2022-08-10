import Login from './components/Login'
import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Favoritos from './components/Favoritos';
import Resultados from './components/Resultados';
import './css/bootstrap.min.css'
import './css/App.css'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className='container mt-3 min-vh-100'>

      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/listado" element={<Listado/>}></Route>
        <Route path="/detalle" element={<Detalle/>}></Route>
        <Route path="/resultados" element={<Resultados/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
      </Routes>
      
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
