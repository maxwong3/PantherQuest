import React ,{useState} from 'react';
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
        <h1>PantherQuest </h1>

        <div className="topbar-buttons">
          <button className="location-button" onClick={handleLocateUser}>
              <span className="icon">🧭</span>
              <span>My Location</span>
          </button>
          <button className="profile-button" onClick={() => setShowProfile(!showProfile)}>
              <span className="icon">👤</span>
              <span>Profile</span>
          </button>
        </div>
      </header>
     
      <div className="content-wrapper">
        <div className="map-container">
          <Map userLocation={userLocation} />
        </div>

        <div className="sidebar">
          <div className="quest-list">
            <h2>Quest Available</h2>
          </div>

          <div className="tips-block">
            <h2>Navigator Tips</h2>
          </div>
        </div>
      </div>

      <Profile isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
};

export default Home;

