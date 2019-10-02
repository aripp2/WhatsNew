import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <aside>
      <button className="menu-btn">Local News</button>
      <button className="menu-btn">Technology</button>
      <button className="menu-btn">Entertainment</button>
      <button className="menu-btn">Science</button>
      <button className="menu-btn">Health</button>
    </aside>
  )
}

export default Menu;