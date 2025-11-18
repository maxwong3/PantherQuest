import React ,{useState} from 'react';
import './Home.css';
import Profile from '../components/Profile';
import Map from '../components/Map';


const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'Guest' };

  return (
    <div className="home-page">
      <header className="topbar">
        <h1>Welcome back, {user.username} </h1>

        <button className="profile-button" onClick={() => setShowProfile(!showProfile)}>
            <span className="icon">👤</span>
            <span>Profile</span>
        </button>
      </header>
      
      <div className="stats-wrapper">
        <div className="quest-completion">
          <h2>Quest Completion</h2>
        </div>

        <div className="live-activities">
          <h2>Live Activities</h2>
        </div>
      </div>
      
      <div className="content-wrapper">
        <div className="map-container">
          <Map />
        </div>

        <div className="sidebar">
          <div className="quest-list">
            <h2>Upcoming Quests</h2>
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

