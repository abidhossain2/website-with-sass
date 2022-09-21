import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className="header_content">
                <div className="header_content_h1">
                    <h1>About Us</h1>
                </div>
                <div className="header_links">
                    <a href="#home" className='header_links_link'>Home</a>
                    
                    <a href="#about" className='header_links_link'>About Us</a>
                </div>
            </div>
        </div>
    );
};

export default Header;