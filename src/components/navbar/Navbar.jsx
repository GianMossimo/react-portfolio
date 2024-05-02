import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About Me</a></p>
    <p><a href='#portfolio'>Projects</a></p>
    <p><a href='#footer'>Contact</a></p>
  </>
)

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className='port__navbar'>
      <div className='port__navbar-links'>
        <div className='port__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='port__navbar-menu'> 
        {
          toggleMenu 
          ? <RiCloseLine color='#203820' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Fill color='#203820' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='port__navbar-menu_container scale-up-center'>
              <div className='port__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
