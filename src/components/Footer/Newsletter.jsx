import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
  <div className="app__newsletter-heading">
    <SubHeading title="Newsletter" />
    <h1 className='headtext__cormorant'>Join the Enchanted Circle</h1>
    <p className='p__opensans'>Stay updated with the latest potion recipes, exclusive offers, and mystical insights straight to your inbox. Enter the realm of magic and mystery by subscribing to our magical newsletter today!</p>
  </div>

  <div className="app__newsletter-input flex__center">
    <input type="email" placeholder='Enter your e-mail' />
    <button type="button" className='custom__button'>Subscribe</button>
  </div>
    
  </div>
);

export default Newsletter;
