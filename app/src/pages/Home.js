import React ,{useState} from 'react';
import './Home.css';
import Profile from '../components/Profile';


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
      
      <div className="map-container">
        <div>map in here</div>
      </div>
      


      
      <Profile isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
};

export default Home;

