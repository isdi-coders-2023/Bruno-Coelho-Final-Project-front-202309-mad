// import React from 'react';
import './layout.scss';
export function Layout() {
  const twitter = 'https://twitter.com/FlipaPodcast';
  const facebook = 'https://www.facebook.com/flipapodcast';
  const youtube = 'https://www.youtube.com/@FlipaPodcast';
  const instagram = 'https://instagram.com/flipapodcast?igshid=YmMyMTA2M2Y=';

  return (
    <section className="layout-container">
      <div className="social-icons">
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img
            className="social-icon"
            src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106106/twitter_c89igx.png"
            alt="twitter icon"
          />
        </a>

        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <img
            className="social-icon"
            src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106101/facebook_dcpxdf.png"
            alt="facebook icon"
          />
        </a>

        <a href={youtube} target="_blank" rel="noopener noreferrer">
          <img
            className="social-icon"
            src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106026/youtube_nzatou.png"
            alt="youtube icon"
          />
        </a>

        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img
            className="social-icon"
            src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106103/instagram_ayn5o5.png"
            alt="instagram icon"
          />
        </a>
      </div>
      <div className="layout">
        <img
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703105762/banner_fmllpf.png"
          alt="banner-women"
          className="banner-women"
        />
      </div>
    </section>
  );
}
