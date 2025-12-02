import React from 'react';
import './Profile.css';

const Profile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="profile-background" onClick={(e) => e.stopPropagation()}>
        <button className="close-profile"onClick={onClose}>×</button>
        <h2>Profile</h2>
        

      </div>


    </div>
  );
};

export default Profile;
