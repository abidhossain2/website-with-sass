import React from 'react';
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={38}
            // color='193, 11, 111'
            color='133, 11, 121'
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={1.5}
            
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    );
};

export default Cursor;