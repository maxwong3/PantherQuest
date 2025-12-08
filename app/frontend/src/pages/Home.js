import React, { useState, useEffect } from 'react';
import './Home.css';
import Profile from '../components/Profile';
import Map from '../components/Map';
import Event from '../components/Event';
import { eventAPI, questListAPI } from '../services/api';


const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [myQuests, setMyQuests] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'Guest' };

  //events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventAPI.getAll();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Fetch user's quest list from database
  useEffect(() => {
    const fetchQuestList = async () => {
      if (user && user.id) {
        try {
          const data = await questListAPI.get(user.id);
          setMyQuests(data);
        } catch (error) {
          console.error('Failed to fetch quest list:', error);
        }
      }
    };
    fetchQuestList();
  }, [user.id]);

  const handleAddQuest = async (event) => {
    if (!myQuests.find(q => q.id === event.id)) {
      // Optimistically update UI
      setMyQuests([...myQuests, event]);
      
      // Save to database
      try {
        await questListAPI.add(user.id, event.id);
      } catch (error) {
        console.error('Failed to add quest:', error);
        // Revert on error
        setMyQuests(myQuests.filter(q => q.id !== event.id));
        alert('Failed to add quest. Please try again.');
      }
    }
  };

  const handleRemoveQuest = async (eventId) => {
    // Optimistically update UI
    const previousQuests = myQuests;
    setMyQuests(myQuests.filter(q => q.id !== eventId));
    
    // Remove from database
    try {
      await questListAPI.remove(user.id, eventId);
    } catch (error) {
      console.error('Failed to remove quest:', error);
      // Revert on error
      setMyQuests(previousQuests);
      alert('Failed to remove quest. Please try again.');
    }
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
          <Map userLocation={userLocation} user={user} />
        </div>

        <div className="sidebar">
          <div className="my-quest-list">
            <h2>My Quest List</h2>
            <div className="quest-items">
              {myQuests.length > 0 ? (
                myQuests.map(quest => (
                  <div 
                    key={quest.id} 
                    className="quest-item my-quest"
                    onClick={() => setSelectedEvent(quest)}
                  >
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
                  <div 
                    key={event.id} 
                    className="quest-item"
                    onClick={() => setSelectedEvent(event)}
                  >
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

      {selectedEvent && (
        <Event event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      <Profile isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
};

export default Home;
