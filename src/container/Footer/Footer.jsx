import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Vasco Nuñez de Balboa, n4, 21004, Huelva</p>
        <p className="p__opensans">+34 613-14-69-26</p>
        {/* <p className="p__opensans">+1 212-555-1230</p> */}
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Step into our Potion Paradise, where every sip unveils a world of enchantment!&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          {/* <FiFacebook /> */}
          {/* <FiTwitter /> */}
          {/* <FiInstagram /> */}
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">04:00 pm - 11:00 pm</p>
        <p className="p__opensans">Saturday</p>
        <p className="p__opensans">08:00 pm - 4:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Frank Casanova. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;