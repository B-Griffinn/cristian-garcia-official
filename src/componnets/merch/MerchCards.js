import React from 'react';
import './MerchCards.css';
import MerchCardItems from './MerchCardItems';
import merch from '../../images/merch.jpg';
import contact from '../../images/contact.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Intoxicated Sports Report Merch</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/merch'
            />
            <MerchCardItems
              src={contact}
              text='Beanie'
              label='Contact Us'
              path='/merch'
            />
              <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/merch'
            />
            <MerchCardItems
              src={contact}
              text='Beanie'
              label='Contact Us'
              path='/merch'
            />
             <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/merch'
            />
            <MerchCardItems
              src={contact}
              text='Beanie'
              label='Contact Us'
              path='/merch'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;