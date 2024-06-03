import React from 'react';
import {images} from '../../constants';
import './aboutus.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="g letter" /> */}
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
        Welcome to the Enchanted Potion Emporium,
         where magic and mystery come to life.
          Nestled in the heart of Huelva, we are a haven for wizards, witches,
           and magical beings seeking the finest brews and elixirs.
            Our mission is to provide you with potions crafted from ancient recipes,
             using only the most potent and rare ingredients.
              Each potion is meticulously prepared to ensure it meets the highest standards of magical excellence.
               Whether you seek a potion for healing, transformation, or enchantment, we have something for every magical need.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife2} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
        The Enchanted Potion Emporium has its roots deep in the rich history of Huelva,
         a land known for its mystical landscapes and ancient traditions.
          Our journey began centuries ago when the first potion masters of Huelva discovered the power of local herbs and enchanted waters.
           Passed down through generations, our knowledge and expertise have been preserved and enhanced by the wisdom of our forebears.
            Today, we continue this proud legacy, combining age-old techniques with modern magic to create potions that are as powerful as they are enchanting.
             Join us on a journey through time and discover the secrets that have made the Enchanted Potion Emporium a cornerstone of magical excellence in Huelva.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
