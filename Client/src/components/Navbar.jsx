import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaBeer } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import './Navbar.css';
import { IconContext } from 'react-icons';





function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link> 
        </div>
       <div className='center'>
       <input type='text' placeholder='serch...'/>
         <button>Search</button>
       </div>
<div className='profile'>

  </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaBars />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
