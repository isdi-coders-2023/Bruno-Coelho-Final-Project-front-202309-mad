import './footer.scss';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="white-logo">
          <img
            className="logo-image-white"
            src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106104/logowhite_zoey9s.png"
            alt="logo"
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
            <img
              className="social-icon-footer"
              src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106106/twitter_c89igx.png"
              alt="twitter icon"
              style={{ width: '35px', height: '35px' }}
            />
            <img
              className="social-icon-footer"
              src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106101/facebook_dcpxdf.png"
              alt="facebook icon"
              style={{ width: '35px', height: '35px' }}
            />
            <img
              className="social-icon-footer"
              src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106026/youtube_nzatou.png"
              alt="youtube icon"
              style={{ width: '35px', height: '35px' }}
            />
            <img
              className="social-icon-footer"
              src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106103/instagram_ayn5o5.png"
              alt="instagram icon"
              style={{ width: '35px', height: '35px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
