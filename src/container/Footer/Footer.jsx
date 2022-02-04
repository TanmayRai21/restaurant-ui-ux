import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => (
  <div className="footer section__padding" id="contacts">
    <FooterOverlay />
    <Newsletter />

    <div className="footer__links">
      <div className="footer__links--contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="p__opensans">Mohaddipur, Gorakhpur, Uttar Pradesh</p>
        <p className="p__opensans">+91 212-344-1230</p>
        <p className="p__opensans">+91 212-555-1230</p>
      </div>

      <div className="footer__links--logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="footer__links--icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer__links--work">
        <h1 className="footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;