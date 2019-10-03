import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return (
    <nav>
      <h1>What's New?</h1>
      <ul>
        <li>
          <button 
            className="menu-btn"
            id="local"
            onClick={() => props.changeNewsType('local')}
            >Local News</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => props.changeNewsType('technology')}
            >Technology</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => props.changeNewsType('entertainment')}
            >Entertainment</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => props.changeNewsType('science')}
            >Science</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => props.changeNewsType('health')}
            >Health</button>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;