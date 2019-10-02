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
            
            >Local News</button>
        </li>
        <li>
          <button 
            className="menu-btn"

            >Technology</button>
        </li>
        <li>
          <button 
            className="menu-btn"

            >Entertainment</button>
        </li>
        <li>
          <button 
            className="menu-btn"

            >Science</button>
        </li>
        <li>
          <button 
            className="menu-btn"

            >Health</button>
        </li>
      </ul>
    </nav>
  )
}

// onClick={() => props.changeNewsType({event.target.id})}

export default Menu;