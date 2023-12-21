import './footer.scss';

export function Footer() {
  const twitter = 'https://twitter.com/FlipaPodcast';
  const facebook = 'https://www.facebook.com/flipapodcast';
  const youtube = 'https://www.youtube.com/@FlipaPodcast';
  const instagram = 'https://instagram.com/flipapodcast?igshid=YmMyMTA2M2Y=';

  return (
    <footer>
      <div className="footer-container">
        <div className="white-logo">
          <img
            className="logo-image-white"
            src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106104/logowhite_zoey9s.png"
            alt="logo white"
            style={{ width: '145px', height: '70px' }}
          />
        </div>
        <div className="text-footer-container">
          <div className="text-footer">
            <ul className="footer-p">
              <li>
                231 Place St., Mountain View
                <br />
                San Francisco, California, USA
              </li>
              <li>+6 3925 456 9860</li>
              <li>info@yourdomain.com</li>
            </ul>
          </div>
          <div className="social-icons-footer">
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <img
                className="social-icon-footer"
                src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106106/twitter_c89igx.png"
                alt="twitter icon"
              />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <img
                className="social-icon-footer"
                src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106101/facebook_dcpxdf.png"
                alt="facebook icon"
              />
            </a>
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <img
                className="social-icon-footer"
                src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106026/youtube_nzatou.png"
                alt="youtube icon"
              />
            </a>

            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <img
                className="social-icon-footer"
                src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106103/instagram_ayn5o5.png"
                alt="instagram icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
