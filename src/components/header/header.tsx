import { useState } from 'react'; //
import { useNavigate } from 'react-router-dom'; //
import { Link } from 'react-router-dom';
import { UserButtons } from '../user.buttons/user.buttons';
import './header.scss';

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [areUserButtonsOpen, setUserButtonsOpen] = useState(false); //

  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
    // Cierra los botones del usuario al abrir/cerrar el menú de servicios
    setUserButtonsOpen(false); //
  };

  const handleUserButtonsToggle = () => {
    //
    setUserButtonsOpen(!areUserButtonsOpen); //
    // Cierra el menú de servicios al abrir/cerrar los botones del usuario
    setDropdownOpen(false); //
  };

  const handleRoute = (route: string) => {
    navigate(`/services/${route}`); //  navigate(`/services/${route}`);
  };
  return (
    <header>
      <div className="container-logo">
        <img
          className="logo-image"
          src="logo.png"
          alt="logo"
          style={{ width: '180px', height: '60px' }}
        />
      </div>
      <div className="navbar">
        <Link to={'/home/'}>
          <div className="navbar-item">Home</div>
        </Link>
        <div className="navbar-item" onClick={handleDropdownToggle}>
          Services
        </div>
        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <div className="dropdown-item" onClick={() => handleRoute('hair')}>
            Hair
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleRoute('eyebrows')}
          >
            Eyebrows
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleRoute('eyelashes')}
          >
            Eyelashes
          </div>
          <div className="dropdown-item" onClick={() => handleRoute('nails')}>
            Nails
          </div>
        </div>
        <div className="navbar-item">Contact Us</div>
        <div className="navbar-item" onClick={handleUserButtonsToggle}>
          <img
            src="user.png"
            alt="user"
            style={{ width: '30px', height: '30px' }}
          />
        </div>
        <div className="navbar-item" onClick={handleUserButtonsToggle}>
          <img
            src="favorito.png"
            alt="favorito"
            style={{ width: '30px', height: '30px' }}
          />
        </div>
        <UserButtons></UserButtons>
      </div>

      {/* <UserButtons></UserButtons> */}
    </header>
  );
}
