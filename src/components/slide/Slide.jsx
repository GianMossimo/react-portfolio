import React from 'react';
import './slide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 4
    };
    
    return (
        <div className='port__carousel'>
            <h1 id='portfolio'>Projects I've Worked On</h1>

            <Slider {...settings}>
                
                <div className="port__carousel-box-4">
                  <div className='port__carousel-box_btn-4'>
                    <a href='https://eastern-electrical.com/' target='_blank' rel="noreferrer"><button>Live Preview</button></a>
                  </div>
                </div>

                <div className="port__carousel-box-3">
                  <div className='port__carousel-box_btn-3'>
                    <a href='https://quackybenefits.netlify.app/' target='_blank' rel="noreferrer"><button>Live Preview</button></a>
                  </div>
                </div>

                <div className="port__carousel-box-2 overflow-content">
                  <h1>Macro Hero</h1>
                  <h2>Coming soon...</h2>
                  <p>I have a passion for science based bodybuilding and athletic performance, and nutrition is a key factor in both. Macro Hero will be a web app (and future phone app) that will aim to provide accurate calorie and macro-nutrient guidelines to athletes of all sports.</p>
                </div>

                <div className="port__carousel-box-2 overflow-content">
                  <h1>Google Gemini App for Teachers</h1>
                  <h2>Coming soon...</h2>
                  <p>Me and my teammate will be integrating the Gemini API into a web app that will provide services to teachers to lighten their workload and allow them to focus on the classroom. It will aim to create and organize lesson plans, provide guidelines for accommodations for SPED students, and aid in the process of writing IEP's.</p>
                </div>

            </Slider>
        </div>
    )
}

export default Slide;