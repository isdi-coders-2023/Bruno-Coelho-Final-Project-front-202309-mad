import './appointment.scss';
import { Link } from 'react-router-dom';
export function Appointment() {
  return (
    <div className="container-appointment">
      <div className="container-image">
        <img
          className="confirmed-image"
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106100/confirmed_fzpv38.png"
          alt="logo"
          style={{ width: '30rem', height: '30rem' }}
        />
      </div>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="service-card">
          <button className="back-button">BACK HOME</button>
        </div>
      </Link>
    </div>
  );
}
