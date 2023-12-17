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
          <Link to={'/register/'}>
            <button>Register</button>
          </Link>
          <Link to={'/login/'}>
            <button>Login</button>
          </Link>
        </>
      )}
      {loggedUser && (
        <>
          <button onClick={logout}>Logout</button>
          <p>Hola {loggedUser.name}</p>
          <Link to={'/admin-panel'}>
            <button type="button">Ir a Panel de Control</button>
          </Link>
        </>
      )}
    </section>
  );
}
