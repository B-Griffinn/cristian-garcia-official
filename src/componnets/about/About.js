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
            <p className='about-para'>CRISTIAN GARCIA</p>
                <p className='about-para-cert'>NASM certified personal trainer</p>
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
