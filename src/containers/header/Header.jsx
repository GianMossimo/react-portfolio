import React, { useState } from 'react';
import './header.css';
import profile from '../../assets/profile.jpg';
import FileSaver from 'file-saver';
import  { Bio } from '../../components';

const Header = () => {

  return (
    <div className='port__header'>
      <div className='port__header-box'>
        <div className='port__header-box_content'>
          <img src={profile} />
          <div className='port__header-box_button'>
            <div className='port__header-box_button-content'>
              <button><a href='#footer'>Contact Me</a></button>
            </div>
          </div>
        </div>
      </div>
      <div className='port__header-description_container scale-up-center'>
        <h1>Hello!</h1>
        <h3>My name is <span>Gian Saccomanno</span>,</h3>
        <h2>a Front End Developer from Alabama</h2>
      </div>
    </div>
  )
}

export default Header
