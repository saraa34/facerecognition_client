import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <>
            <div className='ma4 mt0'>
                <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 70, width: 70 }} >
                    <div className="Tilt-inner pa3"> 
                      <img style={{width: '50px', height: 'auto', justifyContent: 'center'}} alt='logo' src="https://img.icons8.com/ios/100/000000/critical-thinking.png"/>
                    </div>
                </Tilt>
            </div>
        </>
    );
}

export default Logo;