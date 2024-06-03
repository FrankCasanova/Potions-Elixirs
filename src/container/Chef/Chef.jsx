import React from 'react';

import {images} from '../../constants';
import { SubHeading } from '../../components';
import './cheff.css';

const cheff = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="cheff img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="cheff's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__cheff-content">
        <div className="app__cheff-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. 
          Nulla scelerisque, 
          maecenas nec diam pellentesque amet nullam. 
          </p>
      </div>
      <div className="app__cheff-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">cheff & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default cheff;
