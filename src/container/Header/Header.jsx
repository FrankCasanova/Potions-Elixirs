import React from 'react';
import {images} from '../../constants';
import './header.css';
import { SubHeading } from '../../components';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../../variants';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <motion.div 
    variants={fadeIn('right')}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true }}
    className="app__wrapper_info">
    <SubHeading title="Welcome to the Enchanted Potion Emporium"/>
    <motion.div variants={fadeIn('right')} initial="hidden" whileInView={"show13"} viewport={{ once: true }}>
      <h1 className="app__header-h1">Brews & Elixirs for Every Spell and Potion Master</h1>
    </motion.div>
    <motion.div variants={fadeIn('right')} initial="hidden" whileInView={"show2"} viewport={{ once: true }}>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
      Step into a world of mystery and magic,
       where ancient recipes and powerful concoctions await.
        Our collection of potions is crafted with the finest ingredients and centuries-old wisdom,
         perfect for wizards, witches, and magical beings of all kinds.
          Discover the secrets of the arcane and transform your magical abilities with our enchanted elixirs.
      </p>
    </motion.div>
    <motion.div variants={fadeIn('left')} initial="hidden" whileInView={"show14"} viewport={{ once: true }}>
      <button type="button" className="custom__button" ><a href="#menu">Explore Potions</a></button>
    </motion.div>
    </motion.div>
    <motion.div 
    variants={fadeIn('left')}
    initial="hidden"
    whileInView={"show12"}
    viewport={{ once: true }}
    className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </motion.div>
  </div>
);

export default Header;
