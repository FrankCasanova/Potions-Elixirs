import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './laurels.css';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../../variants';


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <motion.div 
    variants={fadeIn('right')}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true }}
    className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </motion.div>

    <motion.div 
    variants={fadeIn('left')}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true }}
    className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </motion.div>
  </div>
);

export default Laurels;
