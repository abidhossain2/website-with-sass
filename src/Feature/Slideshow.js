import React, { useEffect, useRef, useState } from 'react';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';
import client3 from '../images/client3.jpg';

const Slideshow = () => {
    const colors = [
        {
            text: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            url: client1,
            name: 'Alex Green',
            position: 'Co-Founder, Calobrio'
        },
        {
            text: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            url: client2,
            name: 'Bobby Lashly',
            position: 'Co-Founder, Calobrio'
        },
        {
            text: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
            url: client3,
            name: 'Kofi Kingston',
            position: 'Co-Founder, Calobrio'
        }
    ];

    const [index, setIndex] = useState(0);
    const delay = 2900;
    const timeoutRef = useRef(null);
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => { resetTimeout() };
    }, [index]);
    return (
        <div className='slideshow'>
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%,0,0)` }}>
                {
                    colors.map((color, index) => (
                        <div className="slide" key={index}>
                            <div className="slide_container">
                                <div className="slide_container_info">
                                    <p>{color.text}</p>
                                </div>
                                <div className="slide_container_img">
                                    <div className='slide_container_img_img1'>
                                        <img src={color.url} alt="" className='slide_container_img_client'/>
                                    </div>
                                    <div className='slide_container_img_info'>
                                        <p>{color.name}</p>
                                        <p>{color.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="slideshowDots">
                {
                    colors.map((_, idx) => (
                        <div className={`slideshowDot${index === idx ? " active" : ""}`} key={idx}></div>
                    ))
                }
            </div>
        </div>
    );
};

export default Slideshow;