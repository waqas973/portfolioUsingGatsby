
import React from 'react'
import Navbar from './Navbar'
import 'normalize.css';
import '../css/main.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Layout = ({children}) => {
    const [isOpen , setIsOpen ] = useState(false);
    const toggleSidebar = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
           <Navbar toggleSidebar={toggleSidebar}  />
           <Sidebar  isOpen={isOpen} toggleSidebar={toggleSidebar}  />
           {children}
           <Footer />
        </>
    )
}

export default Layout;
