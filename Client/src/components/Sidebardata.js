import React, { useState } from 'react';
import  * as AiFillFolder from "react-icons/ai";
import * as IoIcons  from "react-icons/io";
import * as FaIcons  from 'react-icons/fa';


export const SidebarData = [

    {
        title: 'Employees',
        path: '/Employee',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
      },

      {
        title: 'Projects',
        path: '/Projects',
        icon: <AiFillFolder.AiFillAlert/>,
        cName: 'nav-text'
      },

      {
        title: 'Skills',
        path: '/Skills',
        icon: <FaIcons.FaPeopleArrows/>,
        cName: 'nav-text'
      },
      
      

];