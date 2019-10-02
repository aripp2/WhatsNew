import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <nav>
      <h1>What's New?</h1>
      <ul>
        <li>
          <button className="menu-btn">Local News</button>
        </li>
        <li>
          <button className="menu-btn">Technology</button>
        </li>
        <li>
          <button className="menu-btn">Entertainment</button>
        </li>
        <li>
          <button className="menu-btn">Science</button>
        </li>
        <li>
          <button className="menu-btn">Health</button>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;