import React from 'react';
import testimony from './testimonial.json';
import TestimonialCard from './TestimonialCard';
import './Testimonial.css';


function Testimonial() {
    return (
        <div className="testimonial-card">
        {
            testimony.map((item, index) => (
                <TestimonialCard 
                   name={item.name}
                   info={item.testimonial}
                   key={index} 
                />
            ))
        }
        </div>
    )
}

export default Testimonial
