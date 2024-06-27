import React from 'react'
import ProductList from '../ProductList/ProductList'
import style from './Product.module.css'
import { Link } from 'react-router-dom';

function Product({ props }) {

  console.log(props);
  return (
    <div className={style.card}>
      <div className={style.cardcontent}>
        <img src={props.imgUrl} className={style.productImage} />
        <div className={style.text}>
          <h2 className={style.name}>{props.name}</h2>
          <button className={style.button} ><Link to='/menu'>View Menu</Link></button>
        </div>




      </div>
    </div>

  )
}

export default Product