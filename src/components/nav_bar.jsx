import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/alumno'
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
      >
        Estado de mi práctica industrial
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/list'
      >
        Practicas Disponibles
      </NavLink>
    </nav>
  )
}

export default NavBar
