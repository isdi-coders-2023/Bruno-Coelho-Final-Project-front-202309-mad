import { Link } from 'react-router-dom';
import './ourService.scss';

export function OurService() {
  return (
    <section className="our-service-container">
      <div className="text-container">
        <h2>Our Services</h2>
        <p>
          There are many variations of <br />
          passages of Lorem Ipsum
        </p>
      </div>
      <div className="our-services">
        <div className="service-card">
          <Link to={'/details/hair'}>
            <img className="img-card" src={'/hair.png'} alt="Hair" />
            <button className="button-service">hair</button>
          </Link>
        </div>

        <div className="service-card">
          <Link to={'/details/eyebrows'}>
            <img className="img-card" src={'/eyebrows.png'} alt="Eyebrows" />
            <button className="button-service">Eyebrows</button>
          </Link>
        </div>

        <div className="service-card">
          <Link to={'/details/eyelashes'}>
            <img className="img-card" src={'/eyelashes.png'} alt="Eyelashes" />
            <button className="button-service">Eyelashes</button>
          </Link>
        </div>

        <div className="service-card">
          <Link
            to={'/details/nails'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img className="img-card" src={'/nails.png'} alt="Nails" />
            <button className="button-service">Nails</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
