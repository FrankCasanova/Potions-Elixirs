import React from 'react';
import { images } from '../../constants';
import { SubHeading} from '../../components';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import './gallery.css';

const imageList = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07
];
const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        {/* <SubHeading title="Instagram" /> */}
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Explore the Mystical World of Potion Crafting

Dive into our enchanted realm through our photo gallery. Witness the magical process of potion making, from rare ingredient gathering to the final, shimmering elixirs. Each image captures the essence of our ancient craft, showcasing the beauty and mystery of alchemy.

Feel the magic come alive as you explore our collection of enchanting photographs.</p>
        {/* <button type="button" className="custom__button">View More</button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imageList.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              {/* <BsInstagram className="gallery__image-icon" /> */}
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};


export default Gallery;
