import React from "react";
import './index.css';
import{ReactComponent as Image }from '../../assets/man-icon.svg';

const LandingPage = () => {
return (
<div className="landing-container">
    <div className="about">
        <h1>WELCOME</h1>
        <p>Hello, my name is Orville. I am a frontend developer based in West Palm Beach, Florida, US.
        <p></p>
        I have developed and maintained various projects for large corporations that enhance the efficiency and ease-of-use. 
        <p></p>
        I'm passioanate about creating stunning UI with a simple user experience, with team collaboration or on my own.
        </p>
    </div>
    <div><Image className="image" width={650} height={550}/></div>
    
</div>
);
}

export default LandingPage;