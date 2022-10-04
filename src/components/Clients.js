import React from 'react';
import logo1 from '../images/1.png';
import logo2 from '../images/2.png';
import logo3 from '../images/3.png';
import logo4 from '../images/4.png';
import logo5 from '../images/5.png';
import logo6 from '../images/6.png';
import logo7 from '../images/7.png';
import logo8 from '../images/8.png';

const Clients = () => {
    return (
        <div className='clients_section'>
            <div className="clients_section_container">
                <div className="clients_txt">
                    <p>CLIENTS</p>
                    <h1>OUR <br /> CLIENTS</h1>
                </div>
                <div className="clients_logo">
                    <div className="clients_logo_box">
                        <img src={logo1} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                    <div className="clients_logo_box">
                        <img src={logo2} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                    <div className="clients_logo_box">
                        <img src={logo3} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                    <div className="clients_logo_box">
                        <img src={logo4} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                    <div className="clients_logo_box">
                        <img src={logo5} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                    <div className="clients_logo_box">
                        <img src={logo6} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                    <div className="clients_logo_box">
                        <img src={logo7} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                    <div className="clients_logo_box">
                        <img src={logo8} alt="" />
                        <a href="/">www.avo.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;