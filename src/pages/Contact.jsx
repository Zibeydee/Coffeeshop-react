import React from 'react'
import style from '../pages/style/Contact.module.css'

function Contact() {
  return (
    <div className={style.contactpage}>
      <h1 className={style.heading}>Contact us</h1>
      <input type="text" placeholder='add your name...'/>
      <input type="email" placeholder='add your e-mail...' />
      <input type="number" name="" id="" placeholder='add your number...'/>
      <textarea name="" id="" placeholder='add your note...'></textarea>
      <button className={style.button}>Send</button>
    </div>
  )
}

export default Contact