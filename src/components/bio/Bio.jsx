import React from 'react';
import './bio.css';

const Bio = ({ text }) => {
  return (
    <div className='port__header-description_container-bio'>
      <div className='port__header-description_bio-prop'>
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default Bio
