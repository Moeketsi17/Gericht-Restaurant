import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter/>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">234 Mandela Drive, Pretoria</p>
        <p className="p__opensans">+27 12 763 2289</p>
        <p className="p__opensans">+27 12 983 4631</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="p__opensans">The best way to find yourself is to lose  yourself in the service of other</p>
        <img src={images.spoon} alt="footer-spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">09:00am - 09:00pm</p>
        <br />
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">09:00am - 00:00am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
