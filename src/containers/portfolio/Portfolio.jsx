import React from 'react';
import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import gpt3 from '../../assets/gpt3.png';

const Portfolio = () => {
  return (
    <div className='port__portfolio-container' id='portfolio' >
      <h1>My Language Stack</h1>

      <div className='port__portfolio-container_icons'>
        <a href='#portfolio' title='HTML5'><FontAwesomeIcon className='fab' icon={faHtml5} /></a>
        <a href='#portfolio' title='CSS'><FontAwesomeIcon className='fab' icon={faCss3Alt} /></a>
        <a href='#portfolio' title='JavaScript'><FontAwesomeIcon className='fab' icon={faJs} /></a>
        <a href='#portfolio' title='React'><FontAwesomeIcon className='fab' icon={faReact} /></a>
      </div>
    </div>
  )
}

export default Portfolio
