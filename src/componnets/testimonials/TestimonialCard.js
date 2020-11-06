import React from 'react';
import './Testimonial.css';

function TestimonialCard(props) {
    // deconstructing props from Testimonial.js
    const {name, info} = props
    return (
        <div className="testimonial-wrapper">
                <h3 className="testimonial-header">
                    {name}
                </h3>
                <p className="testimonial-para">
                    {info}
                </p>
        </div>
    )
}

export default TestimonialCard
