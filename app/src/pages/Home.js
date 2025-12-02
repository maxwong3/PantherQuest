import React, { useState } from 'react';
import './Home.css';
import Profile from '../components/Profile';
import Map from '../components/Map';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'Guest' };

  const handleLocateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="home-page">
      <header className="topbar">
        <div className="topbar-left">
          <h1 className="logo">PantherQuest</h1>
        </div>
        <div className="topbar-right">
          <button 
            className="btn btn-secondary" 
            onClick={handleLocateUser}
            aria-label="Find my location"
          >
            <span>📍</span>
            <span>My Location</span>
          </button>
          <div className="profile-wrapper">
            <button 
              className={`btn btn-profile ${showProfile ? 'active' : ''}`}
              onClick={() => setShowProfile(!showProfile)}
              aria-label="Toggle profile"
            >
              <div className="avatar">
                {user?.username?.charAt(0).toUpperCase() || 'G'}
              </div>
            </button>
            <Profile isOpen={showProfile} onClose={() => setShowProfile(false)} />
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="greeting-section">
          <h2 className="greeting">
            Welcome back, <span className="username">{user?.username || 'Traveler'}</span>
          </h2>
          <p className="subtitle">Ready to explore today?</p>
        </div>

        <div className="content-wrapper">
          <div className="map-section">
            <Map userLocation={userLocation} />
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Quests Available</h3>
              <p className="empty-state">No quests available</p>
            </div>

            <div className="sidebar-card">
              <h3>Navigator Tips</h3>
              <p className="empty-state">Click on buildings to explore!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

