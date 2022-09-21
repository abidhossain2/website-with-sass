import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [menubar, setMenubar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setMenubar(true)
        }else{
            setMenubar(false)
        }
    }
    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground)
    }, [])
    return (
        <div className={menubar ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className='navbar_logo'>
                    <a href='#home' className={menubar ? 'navbar_logo_color' : 'navbar_logo_name'}>avo</a>
                </div>
                <span className='navbar_links_toggle' onClick={() => setShow(!show)}>
                    {!show ? <><span className='navbar_links_line'></span>
                        <span className='navbar_links_line'></span>
                        <span className='navbar_links_line'></span>
                    </> : <>
                    <span className='cross-line'></span>
                    <span className='cross-line'></span>
                    </>}
                </span>
                <div className="navbar_links_visible">
                    <a href="#home" className={menubar ? 'navbar_links_color' : 'navbar_links_link'}>Home</a>
                    <a href="#home" className={menubar ? 'navbar_links_color' : 'navbar_links_link'}>Showcases</a>
                    <a href="#home" className={menubar ? 'navbar_links_color' : 'navbar_links_link'}>About</a>
                    <a href="#home" className={menubar ? 'navbar_links_color' : 'navbar_links_link'}>Portfoilo</a>
                    <a href="#home" className={menubar ? 'navbar_links_color' : 'navbar_links_link'}>Contact</a>
                </div>
                {
                    show && <div className="navbar_links">
                        <a href="#home" className='navbar_links_link'>Home</a>
                        <a href="#home" className="navbar_links_link">Showcases</a>
                        <a href="#home" className="navbar_links_link">About</a>
                        <a href="#home" className="navbar_links_link">Portfoilo</a>
                        <a href="#home" className="navbar_links_link">Contact</a>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;