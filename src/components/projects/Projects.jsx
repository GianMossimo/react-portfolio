import React from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = ({ img, name, sub, desc, gitHubLink, siteLink}) => {
  return (
    <div className='port__projects' id='projects'>
      <div className='port__projects-container'>
        <div className='port__projects-all-items'>
          <div className='item'>
            <div className='left'>
              <div className='img'>
                <img src={img} />
              </div>
            </div>
            <div className='right'>
              <h2 className='project-title'>{name}</h2>
              <h3 className='project-subtitle'>{sub}</h3>
              <p className='project-desc'>{desc}</p>
              <div className='buttons'>
                <a href={gitHubLink} target='_blank' className='primary-btn'><FontAwesomeIcon className='fab' icon={faGithub} /></a>
                <a href={siteLink} target='_blank' className='secondary-btn'>Site Preview <FontAwesomeIcon className='fab' icon={faUpRightFromSquare} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
