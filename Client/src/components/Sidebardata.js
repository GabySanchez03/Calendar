import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaBeer } from 'react-icons/fa';


export const SidebarData = [

    {
        title: 'Employee',
        path: '/Employee',
        icon: <FaBars />,
        cName: 'nav-text'
      },

      {
        title: 'Projects',
        path: '/Projects',
        icon: <AiOutlineClose/>,
        cName: 'nav-text'
      },

      {
        title: 'Skills',
        path: '/Skills',
        icon: <FaBeer />,
        cName: 'nav-text'
      },
];