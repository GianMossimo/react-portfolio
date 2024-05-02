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
        <Bio text="Outside of an active lifestyle, my favorite types of movies/media are Sci-Fi, and the Dune movies have taken their place as my favorites (and now I am going to venture into the books because of it). I love playing video games, and my current fixation is Helldivers 2." />
        <br />
        <Bio text="I'm a people person, and enjoy meeting and talking to new people. Something I always try to make sure of is that I have a commonality with every person that I meet, that way we have something to talk about." />
      </div>
    </div>
  )
}

export default About
