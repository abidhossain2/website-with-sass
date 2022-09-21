import React from 'react';
import { GiElectric } from 'react-icons/gi';
import { AiOutlineMobile } from 'react-icons/ai';
import { ImMagicWand } from 'react-icons/im';

const About = () => {
    return (
        <div className='about_section'>
            <div className="about_section_container">
                <div className="about_section_content1">
                    <h1>Who We Are?</h1>
                </div>
                <div className="about_section_content2">
                    <p>We develop creative solutions for small and big brands alike,build authentic product identities and muchmore.Lorem ipsum dolorsitamet,consecteturadipiscingelitsitnonfacilisisvitaeeu.Ultricesutdiammorbirisusdui,necegetatloreminidtristiqueinelementumleonisieleifendplaceratmagnalacuselementumornarevehiculaodioposuerequisqueultricestempuscrasidblanditmaecenasinornarequisdolortempusrisusvitaefeugiatfamesaliquetsed.</p>
                </div>
            </div>
            <div className="service_container">
                <div className="service_box">
                    <div className="service_box_count">
                        <span className='service_box_icon'>
                            <GiElectric />
                        </span>
                    </div>
                    <div className="service_box_count">
                        <h3>Digital Marketing</h3>
                    </div>
                    <div className="service_box_count">
                        <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_box_count">
                        <span className="service_box_icon">
                            <AiOutlineMobile />
                        </span>
                    </div>
                    <div className="service_box_count">
                        <h3>Web & App Development</h3>
                    </div>
                    <div className="service_box_count">
                        <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_box_count">
                        <span className="service_box_icon">
                            <ImMagicWand />
                        </span>
                    </div>
                    <div className="service_box_count">
                        <h3>Graphic Design</h3>
                    </div>
                    <div className="service_box_count">
                        <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;