import React, { useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import style from '../pages/style/Menu.module.css';
import { useNavigate } from 'react-router-dom';
import { reducerCount } from '../reducer';
import { ADD, REMOVE } from '../actionTypes';

function Menu() {
  const [activeMenu, setActiveMenu] = useState(null)
  const navigate = useNavigate()


  


  const [state, dispatch] = useReducer(reducerCount, {count: 0})

  const menuItems = [
    {
      id: 1,
      name: 'Coffee',
      Items: ['Cappuccino -   7$', 'Latte -  8$', 'Espresso -  9$']

    },

    {
      id: 2,
      name: 'Desserts',
      Items: ['Cake -  5$', 'Pie -  4$', 'Cheesecake -  7$']
    },

    {
      id: 3,
      name: 'Tea',
      Items: ['Green Tea -  3$', 'Black Tea -  2$', 'Herbal Tea -  4$']
    },

    {
      id: 4,
      name: 'Milkshakes',
      Items: ['Vanilla -  8$', 'Chocolate -  9$', 'Strawberry -  8$']
    },

    {
      id: 5,
      name: 'Smoothies',
      Items: ['Banana -  7$', 'Berry -  9$', 'Mango -  10$']
    },

    {
      id: 6,
      name: 'Ice-cream',
      Items: ['Vanilla -  4$', 'Chocolate -  5$', 'Strawberry -  4$']
    }
  ]

  const handleMouseEnter = (id) => { setActiveMenu(id) }
  const handleMouseLeave = () => { setActiveMenu(null) }
  const handleClickIcon = () => { navigate('/basket') }




  return (
    <div className={style.menuContainer}>
      <div className={style.heading}>
        <h1 >Menu</h1>
        <div className={style.count}>
          <span>{state.count}</span>
          <FontAwesomeIcon className={style.icon} onClick={handleClickIcon} icon={faBasketShopping} />
        </div>
      </div>
      <ul className={style.menuList}>
        {menuItems.map((item) => (
          <li className={style.menuItem} key={item.id} onMouseEnter={() => (handleMouseEnter(item.id))} onMouseLeave={handleMouseLeave}>
            {item.name}
            {activeMenu === item.id && (
              <ul className={style.subMenu}>
                {item.Items.map((subitem) => (
                  <li className={style.subMenuItem}>
                    {subitem}
                    <button onClick={() => dispatch({type: ADD})} className={style.add}>Add</button>
                    <button onClick={() => dispatch({type: REMOVE})}className={style.remove}>Remove</button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

    </div>
  );

}

export default Menu;
