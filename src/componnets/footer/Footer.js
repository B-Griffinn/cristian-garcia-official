import React from 'react';
import './Footer.css';
// import Button  from '../button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the ISR newsletter!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            {/* <Link to='/'>Support Us</Link> */}
            {/* <Link to='/'>Sponsorships</Link> */}
            {/* <Link to='/'>Schedule</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a
                target="blank"
                href='https://www.instagram.com/cristiannoh15/?hl=en'
            >
                Instagram
            </a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              cristian garcia
              {/* <i className='fas fa-microphone-alt' /> */}
            </Link>
          </div>
          <a className='a-tag' target='blank' href="https://bengriffin-chi.vercel.app/">
          <small className='website-rights'>bigTechnology © 2020</small>
          </a>
          <div className='social-icons'>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/intoxicatedsportsreport/'
              target='blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>

            <a
              className='social-icon-link youtube'
              href='mailto:cgsaldanasbd@gmail.com'
              target='blank'
              aria-label='Envelope'
            >
              <i className='fas fa-envelope' />
            </a>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;