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
      <SubHeading title="Alchemist's Word" />
      <h1 className="headtext__cormorant">Alchemist's Wisdom</h1>
      <div className="app__cheff-content">
        <div className="app__cheff-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
          "By the power of ancient runes and mystical ingredients, we transform the ordinary into the extraordinary." 
          </p>
        </div>
        <p className="p__opensans">
        In the heart of Huelva, where magic and tradition converge, we dedicate ourselves to the art of potion making. Each brew we craft is a blend of history, mystery, and unparalleled expertise. Our potions and elixirs are not merely products but embodiments of ancient wisdom and powerful enchantments.
          </p>
      </div>
      <div className="app__cheff-sign">
        <p>Eldrin Thalor</p>
        <p className="p__opensans">Wizard Alchemist</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default cheff;
