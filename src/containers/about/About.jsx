import React from 'react';
import './about.css';
import { Bio } from '../../components';

const About = () => {
  return (
    <div className='port__about-container' id='about'>
      <div className='port__about-container-text'>
        <h1>About Me</h1>
        <Bio text="My name is Gian Saccomanno, a Front End Developer from Alabama. I'm a former college football player for the Charlotte 49ers, and continue to live an active lifestyle despite being done with sports." />
        <br />
        <Bio text="I still keep up with football, but my favorite sport to watch is now MMA where me and my wife tune into Fight Nights and Cards. As far as hobbies go, I'm not a competitive bodybuilder but I do enjoy participating in the sport and learning the science of training." />
        <br />
        <Bio text="I'm a people person, and enjoy meeting and talking to new people. Something I always try to make sure of is that I have a commonality with every person that I meet, that way we have something to talk about." />
      </div>
    </div>
  )
}

export default About 
