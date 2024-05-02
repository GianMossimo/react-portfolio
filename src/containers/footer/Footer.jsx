import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div>
      <div className='port__contact' id='footer'>
        <h1>Contact Me</h1>
        <form className='port__contact-form' action='https://formspree.io/f/mbjnjwwp' method='post'>
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email Address' required />
          <textarea rows={5} cols={60} name='text' placeholder='Your Message Here' required />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='port__socials-icons'>
        <a href='https://www.linkedin.com/in/gian-saccomanno/' target='_blank'><FontAwesomeIcon className='fab' icon={faLinkedin}/></a>
        <a href='https://github.com/GianMossimo'  target='_blank'><FontAwesomeIcon className='fab' icon={faGithub}/></a>
      </div>
    </div>
  )
}

export default Footer
