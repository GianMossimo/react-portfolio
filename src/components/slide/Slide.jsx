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
        initialSlide: 2
    };
    
    return (
        <div className='port__carousel'>
            <h1>Projects I've Worked On</h1>

            <Slider {...settings}>
                
                <div className="port__carousel-box-2">
                  <h1>Macros 4 Free</h1>
                  <h2>Coming soon...</h2>
                  <p>Macros 4 Free will be a free web app aimed at bodybuilers, both men and women, to help them reach their dietary goals. Macros 4 Free will calculate their BMR and TDEE (total calories burnt per day) and return calorie and macronutrient goals based on their goals of being in a surplus or deficit. I will utilize this website to aim at gaining affiliate codes with fashion and/or supplement companies to add a storefront to the page as well, along with a code to give users discounts on items.</p>
                </div>

                <div className="port__carousel-box-2">
                  <h1>Voluntary Benefits Website</h1>
                  <h2>Coming soon...</h2>
                  <p>This voluntary benefits website is a call to my first line of work, which was B2B insurance sales. The goal of this website is to create an attractive and easily navigated website that explains the purpose of each insurance policy, and why that specific policy has a place and purpose in your life.</p>
                </div>

                <div className="port__carousel-box">
                  <div className='port__carousel-box_btn'>
                    <a href='https://gpt3-project-gs.netlify.app/' target='_blank'><button>Learn More</button></a>
                  </div>
                </div>

                <div className="port__carousel-box-2">
                  <h1>Restaurant Storefront</h1>
                  <h2>Coming soon...</h2>
                  <p>I love ramen, and I love sushi. So I will be creating a modern and sleek website for a restaurant that specializes in these two dishes.</p>
                </div>

            </Slider>
        </div>
    )
}

export default Slide;