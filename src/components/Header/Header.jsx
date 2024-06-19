import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Header.module.css'



function Header() {
  return (
    <div className={style.navBar}>
      {/* <img className={style.logoHeader} src="https://i.pinimg.com/564x/c7/22/49/c72249e3f50359eeae0406246fb3441d.jpg" alt="" /> */}
        <h1 className={style.text}>Coffeeshop</h1>
        <Navbar/>
       
        </div>
  )
}

export default Header