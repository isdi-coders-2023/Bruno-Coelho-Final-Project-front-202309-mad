import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserButtons } from '../user.buttons/user.buttons';
import './header.scss';

export function Header() {
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleServicesDropdownToggle = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
    setUserDropdownOpen(false);
  };

  const handleUserDropdownToggle = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
    setServicesDropdownOpen(false);
  };

  const handleRoute = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <header>
      <div className="container-logo">
        <img
          className="logo-image"
          src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106104/logo_kwvagx.png"
          alt="logo"
          style={{ width: '180px', height: '60px' }}
        />
      </div>
      <div className="navbar">
        <Link to={'/'}>
          <div className="navbar-item">Home</div>
        </Link>
        <div className="navbar-item" onClick={handleServicesDropdownToggle}>
          Services
          <div className={`dropdown ${isServicesDropdownOpen ? 'open' : ''}`}>
            <Link
              to="/details/hair"
              className="dropdown-item"
              onClick={() => handleRoute('hair')}
            >
              Hair
            </Link>
            <Link
              to="/details/eyebrows"
              className="dropdown-item"
              onClick={() => handleRoute('eyebrows')}
            >
              Eyebrows
            </Link>
            <Link
              to="/details/eyelashes"
              className="dropdown-item"
              onClick={() => handleRoute('eyelashes')}
            >
              Eyelashes
            </Link>
            <Link
              to="/details/nails"
              className="dropdown-item"
              onClick={() => handleRoute('nails')}
            >
              Nails
            </Link>
          </div>
        </div>

        <div className="navbar-item" onClick={handleUserDropdownToggle}>
          <img
            className="img-icono"
            src="https://res.cloudinary.com/dott6rqwf/image/upload/v1703106105/user_llt8mo.png"
            alt="user"
            style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}
          />
          <div className={`dropdown ${isUserDropdownOpen ? 'open' : ''}`}>
            <UserButtons></UserButtons>
          </div>
        </div>
      </div>
    </header>
  );
}
