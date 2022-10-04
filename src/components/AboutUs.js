import React from 'react';
import minarea from '../images/min-area.jpg'
import { Parallax } from 'react-scroll-parallax';

const AboutUs = () => {
    return (
        <div className='about_us_section'>
            <div className="about_us_section_img">
                <Parallax translateY={[-10, 10]} speed={5}>
                    <img className='about_us_section_img_img1' src={minarea} alt="" />
                </Parallax>
            </div>
            <div className="about_us_section_txt">
               
                    <p className='txt1'>About Us.</p>
                    <p className='txt2'>Our creative Ad agency is ranked among the finest in the US. <br /> We cultivate smart ideas for start-ups and seasoned players.</p>
                    <div className='about'>
                        <p className='count'>1</p>
                        <p className='count_txt'>
                            <span className='goal'>Our Mission</span> <br />
                            <span className='goal_txt'>Lorem ipsum dolor sit amet consectetur adipisicing</span>
                        </p>
                    </div>
                    <div className='about'>
                        <p className='count'>2</p>
                        <p className='count_txt'>
                            <span className='goal'>Our Goal</span> <br />
                            <span className='goal_txt'>Lorem ipsum dolor sit amet consectetur adipisicing</span>
                        </p>
                    </div>
                    <div className='about'>
                        <p className='count'>3</p>
                        <p className='count_txt'>
                            <span className='goal'>Why Us</span> <br />
                            <span className='goal_txt'>Lorem ipsum dolor sit amet consectetur adipisicing</span>
                        </p>
                    </div>
                
            </div>
        </div>
    );
};

export default AboutUs;