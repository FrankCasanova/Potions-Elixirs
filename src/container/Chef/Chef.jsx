import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './cheff.css';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../../variants';

const cheff = () => (
  <div className="app__bg app__wrapper section__padding">
    <motion.div
      variants={fadeIn('right')}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="cheff img" />
    </motion.div>
    <div className="app__wrapper_info">
      <motion.div
        variants={fadeIn('left')}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}>
        <SubHeading title="Alchemist's Word" />
        <h1 className="headtext__cormorant">Alchemist's Wisdom</h1>
      </motion.div>
      <motion.div 
      variants={fadeIn('left')}
      initial="hidden"
      whileInView={"show1"}
      viewport={{ once: true }}
      className="app__cheff-content">
        <div className="app__cheff-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            "By the power of ancient runes and mystical ingredients, we transform the ordinary into the extraordinary."
          </p>
        </div>
        <p className="p__opensans">
          In the heart of Huelva, where magic and tradition converge, we dedicate ourselves to the art of potion making. Each brew we craft is a blend of history, mystery, and unparalleled expertise. Our potions and elixirs are not merely products but embodiments of ancient wisdom and powerful enchantments.
        </p>
      </motion.div>
      <motion.div 
      variants={fadeIn('left')}
      initial="hidden"
      whileInView={"show13"}
      viewport={{ once: true }}
      className="app__cheff-sign">
        <p>Eldrin Thalor</p>
        <p className="p__opensans">Wizard Alchemist</p>
        <img src={images.sign} alt="sign" />
      </motion.div>
    </div>
  </div>
);

export default cheff;
