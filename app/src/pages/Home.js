import React ,{useState} from 'react';
import './Home.css';
import Profile from '../components/Profile';
import Map from '../components/Map';
import { events } from '../components/InitialData';


const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [myQuests, setMyQuests] = useState([]);
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'Guest' };

  const handleAddQuest = (event) => {
    if (!myQuests.find(q => q.id === event.id)) {
      setMyQuests([...myQuests, event]);
    }
  };

  const handleRemoveQuest = (eventId) => {
    setMyQuests(myQuests.filter(q => q.id !== eventId));
  };

  const availableQuests = events.filter(event => !myQuests.find(q => q.id === event.id));

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
          <div className="my-quest-list">
            <h2>My Quest List</h2>
            <div className="quest-items">
              {myQuests.length > 0 ? (
                myQuests.map(quest => (
                  <div key={quest.id} className="quest-item my-quest">
                    <span className="quest-icon">{quest.icon}</span>
                    <div className="quest-info">
                      <h3>{quest.name}</h3>
                      <p className="quest-location">{quest.location}</p>
                    </div>
                    <button 
                      className="remove-quest-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveQuest(quest.id);
                      }}
                      title="Remove from My Quest List"
                    >
                      −
                    </button>
                  </div>
                ))
              ) : (
                <p className="empty-message">No active quests yet</p>
              )}
            </div>
          </div>

          <div className="available-quests">
            <h2>Available Quests</h2>
            <div className="quest-items">
              {availableQuests.length > 0 ? (
                availableQuests.map(event => (
                  <div key={event.id} className="quest-item">
                    <span className="quest-icon">{event.icon}</span>
                    <div className="quest-info">
                      <h3>{event.name}</h3>
                      <p className="quest-location">{event.location}</p>
                    </div>
                    <button 
                      className="add-quest-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddQuest(event);
                      }}
                      title="Add to My Quest List"
                    >
                      +
                    </button>
                  </div>
                ))
              ) : (
                <p className="empty-message">All quests added!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Profile isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
};

export default Home;

