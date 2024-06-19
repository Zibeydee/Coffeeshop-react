import React from 'react'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
        <ul className={style.footerlist}>
            <li>About us</li>
            <li>Our menu</li>
            <li>Gallery</li>
            <li>Store Locations</li>
        </ul>
    </div>
  )
}

export default Footer