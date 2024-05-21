import React from 'react';
import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  return (
    <div className='port__portfolio-container' id='lang' >
      <h1>My Language Stack</h1>

      <div className='port__portfolio-container_icons'>
        <a title='HTML5'><FontAwesomeIcon className='fab' icon={faHtml5} /></a>
        <a title='CSS'><FontAwesomeIcon className='fab' icon={faCss3Alt} /></a>
        <a title='JavaScript'><FontAwesomeIcon className='fab' icon={faJs} /></a>
        <a title='React'><FontAwesomeIcon className='fab' icon={faReact} /></a>
      </div>
    </div>
  )
}

export default Portfolio;