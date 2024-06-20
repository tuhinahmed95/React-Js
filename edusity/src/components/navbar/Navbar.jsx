import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link, ScrollLink} from 'react-scroll'

const Navbar = () => {

  const [mobileMenu, setMoblileMenu] = useState(false);
  const toggleMenu = ()=>{ 
    mobileMenu ? setMoblileMenu(false) : setMoblileMenu(true)
  }

  return (
    <nav className='container'>
      <img src={logo} className='logo' alt="" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}> 
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link> </li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}> About Us </Link> </li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></button></li>
      </ul>
      <img src={menu_icon} className='menu-icon' alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
