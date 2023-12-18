import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/users/use.users';
import './user.buttons.scss';
import { Link } from 'react-router-dom';

export function UserButtons() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  const { logout } = useUsers();

  return (
    <section>
      {!loggedUser && (
        <>
          <div className="user-item">
            <Link to={'/register/'}>
              <button>Register</button>
            </Link>
          </div>
          <div className="user-item">
            <Link to={'/login/'}>
              <button>Login</button>
            </Link>
          </div>
        </>
      )}
      {loggedUser && (
        <>
          <div className="user-item">
            {/* <div className="user-item-logout"> */}
            <button onClick={logout}>Logout</button>
            {/* </div> */}
            <Link to={'/admin-panel'}>
              <button type="button">Admin Control</button>
            </Link>
            <p>Hola {loggedUser.name}</p>
          </div>
        </>
      )}
    </section>
  );
}
