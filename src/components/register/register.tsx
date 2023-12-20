import { useState } from 'react';
import { useUsers } from '../../hooks/users/use.users';
import './regiter.scss';
import { Link } from 'react-router-dom';

export function Register() {
  const [formData, setformData] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    admin: false,
    age: 0,
  });

  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleChange = (field: string, eventTargetValue: String) => {
    setformData({ ...formData, [field]: eventTargetValue });
  };

  // event: SyntheticEvent
  const handleSubmit = () => {
    register(formData);
    setHasRegister(true);
  };

  return (
    <section className="register-container">
      <h2>Register</h2>

      {!hasRegister && (
        <div className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            required
            onChange={(e) => handleChange('surname', e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="eMail"
            required
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <input
            type="password"
            name="passwd"
            placeholder="Password"
            required
            onChange={(e) => handleChange('password', e.target.value)}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={(e) => handleChange('age', e.target.value)}
          />
          <button onClick={handleSubmit}>Register</button>
          <Link to={'/home/'}>
            <button type="button">Cancel</button>
          </Link>
        </div>
      )}
      {hasRegister && (
        <div className="lets-care-container">
          <p>Successful registration</p>
          <Link to={'/'}>
            <button type="button">let's take care of ourselves</button>
          </Link>
        </div>
      )}
    </section>
  );
}
