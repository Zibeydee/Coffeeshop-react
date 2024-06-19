import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul className={style.list}>
            <li><NavLink exact="true" to='/' className={({ isActive }) => isActive ? style.active : undefined}>Home</NavLink></li>
            <li><NavLink to='/products' className={({ isActive }) => isActive ? style.active : undefined}>Products</NavLink></li>
            <li><NavLink to='/menu' className={({ isActive }) => isActive ? style.active : undefined}>Menu</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => isActive ? style.active : undefined}>About</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) => isActive ? style.active : undefined}>Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar