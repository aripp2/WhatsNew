import React from 'react';
import './Menu.css'

const Menu = ({ topics, changeNewsType}) => {
  console.log(topics)
 
  return (
    <nav>
      <h1>What's New?</h1>
      <ul>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('local')}
            >Local News</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('technology')}
            >Technology</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('entertainment')}
            >Entertainment</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('science')}
            >Science</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('health')}
            >Health</button>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;