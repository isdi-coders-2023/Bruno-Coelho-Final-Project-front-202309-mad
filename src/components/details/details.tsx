import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './details.scss';

export function Details() {
  const { currentCare } = useSelector((state: RootState) => state.caresState);
  return (
    <div className="details-container">
      <div className="details-image-container">
        <img
          src={currentCare?.careImg.url}
          alt={currentCare?.name}
          height="500"
          width="380"
        />
      </div>
      <div className="details-info-container">
        <div className="details-name-container">
          <p>{currentCare?.name}</p>
        </div>
        <p></p>
      </div>
    </div>
  );
}
