import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../kuvat/nopeelogomusta.jpg';
import youtubeLogo from '../kuvat/free-youtube-logo-icon-2431-thumb.jpg';
import twitchLogo from '../kuvat/Twitch_Glitch_Logo_Purple.jpg';
import twitterLogo from '../kuvat/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.jpg';

const Navbar = () => (
  <nav>
    <div className="logo">
      <img src={logo} alt="Ikirauta Interactive Logo" className="logoImage" />
      <span className="logoText">Ikirauta Interactive Oy</span>
    </div>
    <ul>
      <li><NavLink to="/" activeClassName="active">Homepage</NavLink></li>
      <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
      <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
      <li><NavLink to="/Yhteytta" activeClassName="active">Contact</NavLink></li>
      <li><NavLink to="/contact" activeClassName="active">Inquiries</NavLink></li>
    </ul>
    <div className="social-media-links-top-right">
  <a href="https://www.twitch.tv/ikirauta_interactive" target="_blank" rel="noopener noreferrer">
    <img src={twitchLogo} alt="Twitch" className="social-icon" />
  </a>
  <a href="https://www.youtube.com/@ikirautainteractive" target="_blank" rel="noopener noreferrer">
    <img src={youtubeLogo} alt="YouTube" className="social-icon" />
  </a>
  <a href="https://twitter.com/ikiRauta_int" target="_blank" rel="noopener noreferrer">
    <img src={twitterLogo} alt="Twitter" className="social-icon" />
  </a>
</div>

  </nav>
);

export default Navbar;
