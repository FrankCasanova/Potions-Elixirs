import React from 'react';
import {images} from '../../constants';
import './header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <SubHeading title="Welcome to the Enchanted Potion Emporium"/>
      <h1 className="app__header-h1">Brews & Elixirs for Every Spell and Potion Master</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
      Step into a world of mystery and magic,
       where ancient recipes and powerful concoctions await.
        Our collection of potions is crafted with the finest ingredients and centuries-old wisdom,
         perfect for wizards, witches, and magical beings of all kinds.
          Discover the secrets of the arcane and transform your magical abilities with our enchanted elixirs.
      </p>
      <button type="button" className="custom__button" ><a href="#menu">Explore Potions</a></button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
