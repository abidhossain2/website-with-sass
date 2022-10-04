import React from 'react';
import member1 from '../images/member1.jpg';
import member2 from '../images/member2.jpg';
import member3 from '../images/member3.jpg';
import member4 from '../images/member4.jpg';
import member5 from '../images/member5.jpg';
import member6 from '../images/member6.jpg';


const Team = () => {
    return (
        <div className='team_member'>
            <div className="team_member_container">
                <div className="team_member_container_1">
                    <div className='team_member_container_1_txt'>
                        <p>EMPLOYERS</p>
                        <p>OUR TEAM.</p>
                    </div>
                </div>
                <div className="team_member_container_2">
                    <div className='member_slide_item'>
                        <div className='member_img_box'>
                            <div className="member_img">
                                <img src={member1} alt="" />
                            </div>
                            <div className='member_info'>
                                <p>Hasib Sharif</p>
                                <p>General Manager</p>
                            </div>
                        </div>
                        <div className='member_img_box'>
                            <div className="member_img">
                                <img src={member2} alt="" />
                            </div>
                            <div className='member_info'>
                                <p>Jonson Leo</p>
                                <p>Founder</p>
                            </div>
                        </div>
                        <div className='member_img_box'>
                            <div className="member_img">
                                <img src={member3} alt="" />
                            </div>
                            <div className='member_info'>
                                <p>Leio Man</p>
                                <p>Founder</p>
                            </div>
                        </div>
                        <div className='member_img_box'>
                            <div className="member_img">
                                <img src={member4} alt="" />
                            </div>
                            <div className='member_info'>
                                <p>Robert Front</p>
                                <p>CEO Founder</p>
                            </div>
                        </div>
                        <div className='member_img_box'>
                            <div className="member_img">
                                <img src={member5} alt="" />
                            </div>
                            <div className='member_info'>
                                <p>Legender Mao</p>
                                <p>3D Visualisation</p>
                            </div>
                        </div>
                        <div className='member_img_box'>
                            <div className="member_img">
                                <img src={member6} alt="" />
                            </div>
                            <div className='member_info'>
                                <p>Matt Huk</p>
                                <p>3D Visualisation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;