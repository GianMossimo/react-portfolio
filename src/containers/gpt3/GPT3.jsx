import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './gpt3.css';

import gpt3 from '../../assets/gpt3.png';

const GPT3 = () => {
    return (
        <div className='port__quacky'>
            <div className='port__quacky-container'>
                <h1>GPT3 Case Study (Walkthrough Project)</h1>
                <div className='port__quacky-container_links'>
                    <a href='https://gpt3-project-gs.netlify.app/' target='_blank' rel='noreferrer'>Site Preview<FontAwesomeIcon className='fab' icon={faArrowUpRightFromSquare} /></a>
                    <a href='https://github.com/GianMossimo/gpt3-prjct' target='_blank' rel='noreferrer'>GitHub Repo<FontAwesomeIcon className='fab' icon={faGithub} /></a>
                </div>
                <img src={gpt3} alt='gpt3' />
                <h2>Languages Used</h2>
                <p>React, CSS</p>
                <h2>What Is This Web App?</h2>
                <p>This is a walkthrough project that was hosted by <span>Javascript Mastery</span> on YouTube. This is <span>not</span> a project of my own creation. However, this project has reinforced many React concepts to me. I learned more about passing down props, the useState hook, and how to create a React app based on a Figma design. It was incredibly helpful and brought me a lot of confidence to create React apps of my own from scratch.</p>
                <h2>How Did This Project Improve My Skills?</h2>
                <p>It expanded on my understanding of React, CSS, and how to write more efficient code, especially with Media Queries. Before this project, I would write too many media queries using a minimum and maximum width. This walkthrough taught me how to write it using only max-width and that I could write less queries while achieving a seamless result.</p>
            </div>
        </div>
    )
}

export default GPT3;