import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsFillPlayFill } from 'react-icons/bs'
import Slideshow from '../Feature/Slideshow';

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="feedback_section">
                <div className='feedback_container'>
                    <div className="feedback_video_content">
                        <div className="feedback_video_content_box">
                            <a className='feedback_video_link' href="https://vimeo.com/127203262" alt="">
                                <div className='feedback_video_outer'>
                                    <div className='feedback_video_inner'>
                                        <div>
                                            <BsFillPlayFill className='feedback_video_inner_icon' />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <h1>So that's us. Theres no <br /> other way to put it.</h1>
                        </div>
                    </div>
                    <div className="feedback_comment_content">
                        <div className="feedback_comment_content_box">
                            <span>Our Happy Clients</span>
                            <h2>What Client's Say?</h2>
                            <Slideshow />
                        </div>
                    </div>
                </div>
            </div>
            <div className='process_bar'>
                <div className='process_bar_circle'>
                    <CircularProgressbar value={90} text={`${90}%`} strokeWidth={3} />
                    <div className='process_info'>
                        <p>Project</p>
                        <p>Consulting</p>
                    </div>
                </div>
                <div className='process_bar_circle'>
                    <CircularProgressbar value={75} text={`${75}%`} strokeWidth={3} />
                    <div className='process_info'>
                        <p>App</p>
                        <p>Development</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;