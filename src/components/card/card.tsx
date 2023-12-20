// card.tsx

import { useCares } from '../../hooks/cares/use.cares';
import { Link, useNavigate } from 'react-router-dom';
import { Care } from '../../entities/care';
import './card.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';

type Props = {
  care: Care;
};

export function Card({ care }: Props) {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  const { deleteCare, editCare, handleDetailsPage } = useCares();

  const [showEditInputs, setShowEditInputs] = useState(false);
  const [inputFields, setInputFields] = useState({ name: '', price: '' });

  const navigate = useNavigate();

  const handleInputChange = (
    key: 'price' | 'name',
    eventTargetValue: string
  ) => {
    const newState = { ...inputFields };
    newState[key] = eventTargetValue;
    setInputFields(newState);
  };

  const handleEditFields = async () => {
    await editCare(inputFields, care.id);
    navigate('/');
  };

  const handleBack = () => {
    setShowEditInputs(false);
  };

  return (
    <li className="cares-card">
      <div className="card-container">
        <div className="card-image-container">
          <img
            src={care.careImg.url}
            alt={`imagen de ${care.name}`}
            onClick={() => handleDetailsPage(care)}
            className="img-cares"
            data-testid="details"
          />
        </div>
        <div className="card-info-container">
          <Link
            to={'/appointment'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card-type-container">
              {!loggedUser?.admin && <button>Get an appointment</button>}
            </div>
          </Link>
          <div className="card-name-container">
            <p className="card-name">{care.name}</p>
          </div>
          <div className="card-price-container">
            <p className="card-price">Starting from {care.price}€</p>
          </div>
          {showEditInputs ? (
            <div className="buttons-news">
              <input
                className="inputs-admin"
                type="text"
                placeholder="New name"
                onChange={(event) => {
                  handleInputChange('name', event.target.value);
                }}
              />
              <input
                className="inputs-admin"
                type="number"
                placeholder="New price"
                onChange={(event) => {
                  handleInputChange('price', event.target.value);
                }}
              />
              <button
                className="buttons-admin"
                onClick={() => handleEditFields()}
              >
                Save
              </button>
              <button className="buttons-admin" onClick={() => handleBack()}>
                Back
              </button>
            </div>
          ) : (
            loggedUser?.admin && (
              <div className="admin-buttons-card">
                <button
                  className="buttons-admin"
                  onClick={() => setShowEditInputs(true)}
                >
                  Edit
                </button>
                <button
                  className="buttons-admin"
                  onClick={() => deleteCare(care.id)}
                >
                  Delete
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </li>
  );
}
