"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
   }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'> Hamza Akram</div>

            {/* large screen navbar link  */}
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><Link href='/'>Home</Link></li>
                <li className='menuLink'><Link href='/about'>About</Link></li>
                <li className='menuLink'><Link href='/projects'>Projects</Link></li>
                <li className='menuLink'><Link href='/skills'>Skills</Link></li>
                <li className='menuLink'><Link href='/contact'>Contact</Link></li>
                </ul>

                {/* hamberger menu icon */}
                <div className='nevbar-menu-icon' onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineMenu size={30}/> : <AiOutlineMenu size={30}/>}
            </div>
        </div> 

        {/* mobile menu dropedown */}
       {isMenuOpen && (
        <ul className={`nevbar-menu ${isMenuOpen ? 'open' : '' }`}>
          <li className='navbar-link'>
            <Link href="/" onClick={toggleMenu}/>Home
          </li>
          <li className='navbar-link'>
            <Link href="/about" onClick={toggleMenu}/>About
          </li>
          <li className='navbar-link'>
            <Link href="/projects" onClick={toggleMenu}/>Projects
          </li>
          <li className='navbar-link'>
            <Link href="/skills" onClick={toggleMenu}/>Skills
          </li>
          <li className='navbar-link'>
            <Link href="/contact" onClick={toggleMenu}/>Contact
          </li>

        </ul>
      )}
    </div>
  )
} 

export default Navbar
