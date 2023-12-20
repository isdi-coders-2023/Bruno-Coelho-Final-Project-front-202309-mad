import './admin.panel.scss';
import { Link } from 'react-router-dom';
import './admin.panel.scss';
export function AdminPanel() {
  return (
    <div className="admin-panel-container">
      <div className="admin-panel-h2">
        <h2>Admin Panel</h2>
      </div>
      <div className="admin-panel-buttons">
        <Link
          to={'/create'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="add-cares-button">
            <button>Add Cares</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
