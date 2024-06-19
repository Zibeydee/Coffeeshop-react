import React from 'react'
import style from './style/Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className={style.home}>
        <h1 className={style.heading}>How do you like your coffee?</h1>
        <p className={style.text}>Discover the perfect brew that matches your taste. From bold espressos to creamy lattes, our menu has something for every coffee lover. Come explore and find your new favorite.</p>
        <button className={style.button}><Link to='/menu'>Menu</Link></button>
      </div>
    </div>
  )
}

export default Home