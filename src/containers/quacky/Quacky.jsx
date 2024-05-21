import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './quacky.css';

import quacky from '../../assets/quacky.png';

const Quacky = () => {
    return (
        <div className='port__quacky'>
            <div className='port__quacky-container'>
                <h1>Quacky Benefits Case Study</h1>
                <div className='port__quacky-container_links'>
                    <a href='https://quackybenefits.netlify.app/' target='_blank' rel='noreferrer' >Site Preview<FontAwesomeIcon className='fab' icon={faArrowUpRightFromSquare} /></a>
                    <a href='https://github.com/GianMossimo/benefits-website' target='_blank' rel='noreferrer' >GitHub Repo<FontAwesomeIcon className='fab' icon={faGithub} /></a>
                </div>
                <img src={quacky} alt='quacky' />
                <h2>Languages Used</h2>
                <p>React, CSS</p>
                <h2>Why Did I Make This Web App?</h2>
                <p>My first job out of college was the role of Sales Representative for the company known as Colonial Life. The nature of my job was to contact businesses within the city and pitch to them the importance of having Voluntary Benefits available for their employees. Now, as a Frontend Engineer, I have the capability to create an attractive web app to show a product lineup for said benefits. Quacky Benefits is not a real company, but this web app serves as a way of showing companies that I'm able to take their products and create an easily navigable website.</p>
                <h2>How Did This Project Improve My Skills?</h2>
                <p>The greatest impact this project had was on my understanding of the React Router and creating a multi page application. Creating dedicated pages for each policy has real world application that could convey my skills to businesses.</p>
                <br></br>
                <p>I also had a lot of fun creating the card components on the front page, and I believe that they provide a sleek and modern design. Overall, my CSS skills as a whole improved greatly on this project.</p>
                <br></br>
            </div>
        </div>
    )
}

export default Quacky;