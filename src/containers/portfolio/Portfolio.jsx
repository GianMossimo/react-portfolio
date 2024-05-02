import React from 'react';
import './portfolio.css';
import { Projects } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import gpt3 from '../../assets/gpt3.png';

const Portfolio = () => {
  return (
    <div className='port__portfolio-container' id='portfolio' >
      <h1>My Language Stack</h1>

      <div className='port__portfolio-container_icons'>
        <a href='#'><FontAwesomeIcon className='fab' icon={faHtml5} /></a>
        <a href='#'><FontAwesomeIcon className='fab' icon={faCss3Alt} /></a>
        <a href='#'><FontAwesomeIcon className='fab' icon={faJs} /></a>
        <a href='#'><FontAwesomeIcon className='fab' icon={faReact} /></a>
      </div>
      <br />
      <div className='port__portfolio-container_projects'>
        <h1>Projects I've Worked On</h1>
        <Projects img={gpt3} name='GPT3' sub='Walkthrough Project from JavaScript Mastery' desc='This was a walkthrough project hosted by JavaScript Mastery. The project had a great impact on reinforcing my knowledge of React, State Hooks, and Responsive Design' gitHubLink='' siteLink='https://gpt3-project-gs.netlify.app/' />
      </div>
    </div>
  )
}

export default Portfolio
