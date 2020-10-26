import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>

            <div className='about-content'>
            <h1 className='about-header'>about me</h1>
            <div className='about-left-content'>
                <p className='about-para'>CRISTIAN GARCIA</p>
                <p className='about-para-cert'>NASM certified personal trainer</p>
            </div>

            <div className="about-middle-content">
                <p>
                    I am a freelance NASM certified Personal Trainer.
                    I enjoy helping others achieve their goals through fitness.
                </p>
            </div>
            </div>
        </div>
    )
}

export default About
