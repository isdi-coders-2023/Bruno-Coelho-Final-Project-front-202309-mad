import { useCares } from '../../hooks/cares/use.cares';
import { Link, useNavigate } from 'react-router-dom';
import { Care } from '../../entities/care';
import './card.scss';
// import { makeImageURL } from '../../services/images';
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
  // const [forceRerenderKey, setForceRerenderKey] = useState(0);

  const navigate = useNavigate();

  const handleInputChange = (
    key: 'price' | 'name',
    eventTargetValue: string
  ) => {
    const newState = { ...inputFields };
    newState[key] = eventTargetValue;
    setInputFields(newState);
  };

  const handleSendEditFields = async () => {
    await editCare(inputFields, care.id);
    navigate('/home');
  };

  return (
    <li className="cares-card">
      <div className="card-container">
        <div className="card-image-container">
          <Link
            to={'/details/' + care.type}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src={care.careImg.url}
              alt={`imagen de ${care.name}`}
              onClick={() => handleDetailsPage(care)}
              className="mobile-img"
              data-testid="details"
            />
          </Link>
        </div>
        <div className="card-info-container">
          <div className="card-type-container">
            {!loggedUser?.admin && <button>Get an appointment</button>}
          </div>
          <div className="card-name-container">
            <p className="card-name">{care.name}</p>
          </div>
          <div className="card-price-container">
            <p className="card-price">Starting from {care.price}€</p>
          </div>
          {showEditInputs && (
            <div>
              <input
                type="text"
                placeholder="New Name"
                onChange={(event) => {
                  handleInputChange('name', event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="New Price"
                onChange={(event) => {
                  handleInputChange('price', event.target.value);
                }}
              />
              <button onClick={() => handleSendEditFields()}>
                Send new fields
              </button>
            </div>
          )}
          {loggedUser?.admin && (
            <div>
              <button onClick={() => setShowEditInputs(true)}>Edit care</button>
              <button onClick={() => deleteCare(care.id)}>Delete care</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
