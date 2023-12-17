import { useState } from 'react';
import { useUsers } from '../../hooks/users/use.users';
import './login.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Login() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const [formData, setformData] = useState({
    email: '',
    password: '',
  });

  const { login } = useUsers();

  const handleChange = (field: string, eventTargetValue: String) => {
    setformData({ ...formData, [field]: eventTargetValue });
  };

  // event: SyntheticEvent
  const handleSubmit = () => {
    login(formData);
  };

  return (
    <>
      <h2>Login</h2>
      {!loggedUser && (
        <div className="login-form">
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            onChange={(event) => handleChange('email', event.target.value)}
          />
          <input
            type="password"
            name="passwd"
            placeholder="password"
            required
            onChange={(event) => handleChange('password', event.target.value)}
          />
          <div className="login-buttons-container">
            <button onClick={handleSubmit}>Login</button>
            <Link to={'/home/'}>
              <button type="button">Cancelar</button>
            </Link>
          </div>
        </div>
      )}
      {loggedUser && !loggedUser.admin && (
        <div>
          <p>Login correcto</p>
          <Link to={'/home'}>
            <button type="button">Ir a Home</button>
          </Link>
        </div>
      )}
      {loggedUser && loggedUser.admin && (
        <div>
          <p>Login correcto</p>
          <Link to={'/admin-panel'}>
            <button type="button">Ir a Panel de Control</button>
          </Link>
        </div>
      )}
    </>
  );
}
