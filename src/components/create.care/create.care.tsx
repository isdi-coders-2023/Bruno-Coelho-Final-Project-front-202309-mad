import { SyntheticEvent } from 'react';
import './create.care.scss';
import { useCares } from '../../hooks/cares/use.cares';
import { useNavigate } from 'react-router-dom';

export function CreateCare() {
  const { createCare } = useCares();
  const navigate = useNavigate();

  const handleCreateCare = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    createCare(formData);
    navigate('/');
  };

  return (
    <div className="create-form-container">
      <div className="create-form-h2">
        <h2>Add Service</h2>
      </div>
      <form
        onSubmit={handleCreateCare}
        className="create-card"
        aria-label="form"
      >
        <select name="type" required>
          <option value="hair">Hair</option>
          <option value="eyelashes">Eyelashes</option>
          <option value="eyebrows">Eyebrows</option>
          <option value="nails">Nails</option>
        </select>
        <input
          className="inputs-create"
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <input
          className="inputs-create"
          type="text"
          name="description"
          placeholder="Add description"
          required
        />
        <input
          className="inputs-create"
          type="number"
          name="price"
          placeholder="Precio"
        />
        <label className="file-upload">
          <input type="file" name="careImg" id="careImg" />
          Imagen
        </label>
        <div className="create-buttons-container">
          <button className="submit-button" type="submit">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
}
