import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/users/use.users';
import './user.buttons.scss';
import { Link } from 'react-router-dom';

export function UserButtons() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  const { logout } = useUsers();

  return (
    <section className="user-buttons-container">
      {!loggedUser && (
        <>
          <div className="user-item">
            <Link to={'/register/'}>
              <button className="user-buttons">Register</button>
            </Link>
          </div>
          <div className="user-item">
            <Link to={'/login/'}>
              <button className="user-buttons">Login</button>
            </Link>
          </div>
        </>
      )}
      {loggedUser && (
        <>
          <div className="user-item">
            {/* <div className="user-item-logout"> */}
            <button className="user-buttons" onClick={logout}>
              Logout
            </button>
            {/* </div> */}
            <Link to={'/admin-panel'}>
              <button className="user-buttons" type="button">
                Admin Control
              </button>
            </Link>
            <p>Hola {loggedUser.name}</p>
          </div>
        </>
      )}
    </section>
  );
}
