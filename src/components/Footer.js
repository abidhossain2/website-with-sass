import React from 'react';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineTwitter,AiOutlineBehance} from 'react-icons/ai';
import {TiSocialPinterest} from 'react-icons/ti';
import ins1 from '../images/ins1.jpg';
import ins2 from '../images/ins2.jpg';
import ins3 from '../images/ins3.jpg';

const Footer = () => {
    return (
        <div className='footer_section'>
            <div className="footer_section_container">
                <div className="footer_left">
                    <div className="footer_contact">
                        <p className='name'>avo</p>
                        <span className='contact'>Email:</span> <span>Avo_support@website.com</span> <br/> <br />

                        <span className='contact'>Address:</span> <span>A32 , Ave 15th Street, Door 211, San Franciso, USA 32490.</span> <br /> <br />
                        <span className='contact'>Phone:</span> <span>(+1) 2345 678 44 88</span>
                            <br /> <br /> <br />
                        <p className='social'>FOLLOW US</p>
                        <div className='social_logo'>
                            <div className='social_logo_icon'>
                                <GrFacebookOption/>
                            </div>
                            <div className='social_logo_icon'>
                                <AiOutlineTwitter/>
                            </div>
                            <div className='social_logo_icon'>
                                <TiSocialPinterest/>
                            </div>
                            <div className='social_logo_icon'>
                                <AiOutlineBehance/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_info">
                        <p className='footer_info_txt1'>NEWSLETTER</p>
                        <p className='footer_info_txt2'>Sign up for subscribe out newsletter!</p>
                        <div className='input_box'>
                            <input type="email" placeholder='Your Email' />
                            <button>SUBSCRIBE</button>
                        </div>
                        <p className='instagram'>INSTAGRAM POST</p>
                        <div className='ins_pic'>
                            <div className="ins">
                                <a href="##"> <img src={ins1} alt="" /> </a>
                            </div>
                            <div className="ins">
                                <a href="##"> <img src={ins2} alt="" /> </a>
                            </div>
                            <div className="ins">
                                <a href="##"> <img src={ins3} alt="" /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='site'>
                <p>&copy;  2020, Avo Template. Made with passion by UI-ThemeZ.</p>
            </div>
        </div>
    );
};

export default Footer;