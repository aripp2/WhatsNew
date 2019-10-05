import React from 'react';
import './Menu.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { FaFilm } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';

const Menu = ({ changeNewsType }) => {
  return (
    <nav>
      <h1>What's New?</h1>
      <ul>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('local')}
            ><FaMapMarkerAlt />Local News</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('technology')}
            ><FaLaptop />Technology</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('entertainment')}
            ><FaFilm />Entertainment</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('science')}
            ><FaFlask />Science</button>
        </li>
        <li>
          <button 
            className="menu-btn"
            onClick={() => changeNewsType('health')}
            ><FaHeartbeat />Health</button>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;