import { useState, React } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../../variants'
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <motion.div
        variants={fadeIn('down')}
        initial="hidden"
        whileInView={"show2"}
        viewport={{ once: true }}
        className="app__navbar-logo">
        <a href="https://frankcasanova.pythonanywhere.com/" target="_blank">
          <img src={images.logo} alt="app logo" />
        </a>
      </motion.div>
      <ul className="app__navbar-links">
        <motion.li
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="p__opensans">
          <a href="#home">Home</a>
        </motion.li>
        <motion.li
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={"show1"}
          viewport={{ once: true }}
          className="p__opensans">
          <a href="#about">About</a>
        </motion.li>
        <motion.li
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={"show12"}
          viewport={{ once: true }}
          className="p__opensans">
          <a href="#menu">Potions</a>
        </motion.li>
        <motion.li
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={"show13"}
          viewport={{ once: true }}
          className="p__opensans">
          <a href="#awards">Awards</a>
        </motion.li>
        <motion.li
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={"show14"}
          viewport={{ once: true }}
          className="p__opensans">
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>
      {/* <div className="app__navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div> */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}



export default Navbar;
