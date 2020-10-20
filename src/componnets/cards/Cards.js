import React from 'react';
import './Cards.css';
import CardItem from './CardItems';
import merch from '../../images/merch.jpg';
import contact from '../../images/contact.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>NOT YOUR AVERAGE SPORTS PODCAST</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={merch}
              text='New Merch Coming Soon'
              label='Merchandise'
              path='/merch'
            />
            <CardItem
              src={contact}
              text='Business Inquires'
              label='Contact Us'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;