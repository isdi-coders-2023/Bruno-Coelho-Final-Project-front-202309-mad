import React from 'react';
import './layout.scss';

import twitterIcon from '../../../public/twitter.png';
import facebookIcon from '../../../public/facebook.png';
import youtubeIcon from '../../../public/youtube.png';
import instagramIcon from '../../../public/instagram.png';

export function Layout() {
  return (
    <section className="layout-container">
      <div className="social-icons">
        <a
          href="https://twitter.com/FlipaPodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ backgroundImage: `url(${twitterIcon})` }}
        ></a>
        <a
          href="https://www.facebook.com/flipapodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ backgroundImage: `url(${facebookIcon})` }}
        ></a>
        <a
          href="https://www.youtube.com/@FlipaPodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ backgroundImage: `url(${youtubeIcon})` }}
        ></a>
        <a
          href="https://instagram.com/flipapodcast?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ backgroundImage: `url(${instagramIcon})` }}
        ></a>
      </div>
      <div className="layout">
        <img
          src="banner.png"
          alt="banner-women"
          className="banner-women"
          style={{ width: '100%', height: '' }}
        />
      </div>
    </section>
  );
}
