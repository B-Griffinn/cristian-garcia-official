import React from 'react';
import './About.css';
import cristian from '../../images/cristian.jpg';
import VideoList from './VideoList';

function About() {
    return (
        <div className='about-container'>

            <h1 className='about-header'>
                <span>about me</span>    
            </h1>
            
            <div className='about-content'>
            <div className='about-left-content'>
                <img 
                    className='about-img'
                    src={cristian}
                    alt="about"
                />
            </div>

            <div className="about-right-wrapper">
                <div className="about-right-content">

                <div className='about-right-div'>
                    <ul
                        className="about-ul"
                    >
                        <li>Personal Trainer and Fitness Enthusiast</li>
                        <li>NASM Certified and soon to be CSCS certified.</li>
                    </ul>
                    
                    <p
                        className="about-para"
                    >
                        I strive to help others achieve their goals and live better lives through fitness.
                        Exercise and food improve your daily life and only have positive impacts with the proper direction - that is where I come in. I am in no way a nutritionist but I have the experience to help change your life dramatically without all the strict diet advertisements.
                    </p>

                    <p
                        className="about-para"
                    >
                        I have been overweight. Only through exercise and food I managed to lose 88 pounds and get my life back on track. I hope we can work together to make the changes you want to a healthier and happier lifestyle. It is up to YOU to change, but I would like to be the one to help you along that journey.
                    </p>
   
                    <p
                        className="about-para"
                    >
                        Please do not hesitate to contact me with any questions!
                    </p>
                </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default About
