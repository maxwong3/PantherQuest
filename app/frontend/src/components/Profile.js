import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Profile.css';

const Profile = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/login');
  };

  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-background" onClick={(e) => e.stopPropagation()}>
        <button className="close-profile" onClick={onClose}>×</button>
        <h2>Profile</h2>
        
        <div className="profile-info">
          <p><strong>Name:</strong> {user?.name || 'Guest'}</p>
          <p><strong>Username:</strong> {user?.username || 'N/A'}</p>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
