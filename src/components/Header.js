import React from 'react'
import { NavLink } from 'react-router-dom'
import Buscador from './Buscador'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header className="navbar d-flex justify-content-around navbar-expand-lg bg-dark">
        <nav className='navbar-desktop'>
            <ul className='navbar-nav'>
            <li className='nav-item'><NavLink className='nav-link' style={{color: 'white'}} to='/'>Home</NavLink></li>
                <li className='nav-item'><NavLink className='nav-link' style={{color: 'white'}}  to='/listado'>Listado</NavLink></li>
            </ul>
        
        </nav>
        <nav className='mobile-navbar'>
          <ul>
            <li><NavLink className='nav-link' style={{color: 'white'}} to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></NavLink></li>
            <li><NavLink className='nav-link' style={{color: 'white'}}  to='/listado'><FontAwesomeIcon icon={faList}></FontAwesomeIcon></NavLink></li>
          </ul>
        </nav>
        <Buscador/>
    </header>
  )
}

export default Header