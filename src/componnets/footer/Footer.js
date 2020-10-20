import React from 'react';
import './Footer.css';
import Button  from '../button/Button';
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
            <Link to='/'>Support Us</Link>
            <Link to='/'>Sponsorships</Link>
            <Link to='/'>Schedule</Link>
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
                href='https://www.instagram.com/intoxicatedsportsreport/'
            >
                Instagram
            </a>
            {/* <Link to='/'>Facebook</Link> */}
            <a
                target="blank"
                href='https://open.spotify.com/show/3nQqvzFRcj4esPpw6FsJTZ'
            >
                Spotify
            </a>
            <a 
                href='https://twitter.com/IntoxicatedPod'
                target='blank'
            >
                Twitter
            </a>
            <a 
                href='https://anchor.fm/isr2020/'
                target='blank'
            >
                Anchor
            </a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ISR
              <i className='fas fa-microphone-alt' />
            </Link>
          </div>
          <small className='website-rights'>ISR © 2020</small>
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
              className='social-icon-link facebook'
              href='https://open.spotify.com/show/3nQqvzFRcj4esPpw6FsJTZ'
              target='blank'
              aria-label='Spotify'
            >
              <i className='fab fa-spotify'/>
            </a>

            <a
              className='social-icon-link twitter'
              href='https://twitter.com/IntoxicatedPod'
              target='blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>

            <a
              className='social-icon-link youtube'
              href='https://anchor.fm/isr2020/'
              target='blank'
              aria-label='Anchor'
            >
              <i className='fas fa-anchor' />
            </a>

            <a
              className='social-icon-link youtube'
              href='mailto:isrpodcast@yahoo.com'
              target='blank'
              aria-label='Anchor'
            >
              <i className='fas fa-envelope' />
            </a>

            {/* <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;