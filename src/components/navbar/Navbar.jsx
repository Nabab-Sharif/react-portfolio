import './navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { useState } from 'react';


const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><IoBookOutline /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>
      </nav>
    </>
  )
}

export default Navbar
