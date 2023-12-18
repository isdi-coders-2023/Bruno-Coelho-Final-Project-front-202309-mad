import { Link } from 'react-router-dom';
import './ourService.scss';

// Importa tus imágenes
import hairImage from '../../../public/hair.png';
import eyebrowsImage from '../../../public/eyebrows.png';
import eyelashesImage from '../../../public/eyelashes.png';
import nailsImage from '../../../public/nails.png';

export function OurService() {
  return (
    <div className="our-service-container">
      <h2>Our Services</h2>
      <p style={{ textAlign: 'center' }}>
        There are many variations of <br />
        passages of Lorem Ipsum
      </p>
      <div className="our-services">
        <Link
          to={'/details/hair'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="service-card">
            <img src={hairImage} alt="Hair" />
            <button>Hair</button>
          </div>
        </Link>

        <Link
          to={'/details/eyebrows'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="service-card">
            <img src={eyebrowsImage} alt="Eyebrows" />
            <button>Eyebrows</button>
          </div>
        </Link>

        <Link
          to={'/details/eyelashes'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="service-card">
            <img src={eyelashesImage} alt="Eyelashes" />
            <button>Eyelashes</button>
          </div>
        </Link>

        <Link
          to={'/details/nails'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="service-card">
            <img src={nailsImage} alt="Nails" />
            <button>Nails</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
