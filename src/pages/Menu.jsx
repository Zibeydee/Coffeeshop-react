import React, { useState } from 'react';
import style from '../pages/style/Menu.module.css';

function Menu() {
  const [activeMenu, setActiveMenu] = useState(null)

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

  const handleMouseEnter = (id) => { (setActiveMenu(id)) }
  const handleMouseLeave = () => { (setActiveMenu(null)) }


  return (
    <div className={style.menuContainer}>
      <h1>Menu</h1>
      <ul className={style.menuList}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={style.list} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}
          >
            {item.name}
            {activeMenu === item.id && (
              <ul className={style.subMenu}>
                {item.Items.map((subItem, index) => (
                  <li key={index} className={style.subItem}>
                    {subItem}
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
