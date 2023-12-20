// import React from 'react';
import './layout.scss';
export function Layout() {
  return (
    <section className="layout-container">
      <div className="social-icons">
        <img
          className="social-icon"
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106106/twitter_c89igx.png"
          alt="twitter icon"
          style={{ width: '35px', height: '35px' }}
        />
        <img
          className="social-icon"
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106101/facebook_dcpxdf.png"
          alt="facebook icon"
          style={{ width: '35px', height: '35px' }}
        />
        <img
          className="social-icon"
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106026/youtube_nzatou.png"
          alt="youtube icon"
          style={{ width: '35px', height: '35px' }}
        />
        <img
          className="social-icon"
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106103/instagram_ayn5o5.png"
          alt="instagram icon"
          style={{ width: '35px', height: '35px' }}
        />
      </div>
      <div className="layout">
        <img
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703105762/banner_fmllpf.png"
          alt="banner-women"
          className="banner-women"
          style={{ width: '100%', height: '' }}
        />
      </div>
    </section>
  );
}
