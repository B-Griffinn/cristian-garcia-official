import React from 'react';
import './About.css';
import cristian from '../../images/cristian.jpg';

function About() {
    return (
        <div className='about-container'>

            <h1 className='about-header'>about me</h1>
            
            <div className='about-content'>
            <div className='about-left-content'>


                <img 
                    className='about-img'
                    src={cristian}
                    alt="about"
                />
     

            </div>

            <div className="about-middle-content">
                <span> NASM certified personal trainer </span>
                <p className='about-para'>
                    I am a freelance NASM certified Personal Trainer here to help others achieve their goals through fitness.
                </p>

            </div>
            </div>
        </div>
    )
}

export default About
