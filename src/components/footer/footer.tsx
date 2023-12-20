import './footer.scss';

import twitterIcon from '../../../public/twitter.png';
import facebookIcon from '../../../public/facebook.png';
import youtubeIcon from '../../../public/youtube.png';
import instagramIcon from '../../../public/instagram.png';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="white-logo">
          <img
            className="logo-image-white"
            src={'/logowhite.png'}
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
            <a
              href="https://twitter.com/FlipaPodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-footer"
              style={{ backgroundImage: `url(${twitterIcon})` }}
            ></a>
            <a
              href="https://www.facebook.com/flipapodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-footer"
              style={{ backgroundImage: `url(${facebookIcon})` }}
            ></a>
            <a
              href="https://www.youtube.com/@FlipaPodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-footer"
              style={{ backgroundImage: `url(${youtubeIcon})` }}
            ></a>
            <a
              href="https://instagram.com/flipapodcast?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-footer"
              style={{ backgroundImage: `url(${instagramIcon})` }}
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
