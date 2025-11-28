import React from 'react';
import './Building.css';

const BuildingDetails = ({ building, events, onClose, onEventClick, visitedBuildings, completedEvents }) => {
  const isVisited = visitedBuildings.includes(building.id);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="building-details" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="building-header">
          <div className="building-icon">{building.sprite}</div>
          <div>
            <h2>{building.name}</h2>
            <span className={`building-badge ${building.type}`}>
              {building.type.replace('_', ' ')}
            </span>
            {isVisited && <span className="visited-badge">✓ Visited</span>}
          </div>
        </div>

        <p className="building-description">{building.description}</p>

        {building.departments.length > 0 && (
          <div className="section">
            <h3>🏢 Departments</h3>
            <div className="tag-list">
              {building.departments.map((dept, index) => (
                <span key={index} className="tag">{dept}</span>
              ))}
            </div>
          </div>
        )}

        {building.classrooms.length > 0 && (
          <div className="section">
            <h3>🚪 Key Classrooms</h3>
            <div className="classroom-list">
              {building.classrooms.map((room, index) => (
                <span key={index} className="classroom-badge">Room {room}</span>
              ))}
            </div>
          </div>
        )}

        {events.length > 0 && (
          <div className="section">
            <h3>📅 Available Events & Opportunities</h3>
            <div className="events-list">
              {events.map((event) => {
                const isCompleted = completedEvents.includes(event.id);
                return (
                  <div
                    key={event.id}
                    className={`event-card ${isCompleted ? 'completed' : ''}`}
                    onClick={() => onEventClick(event)}
                  >
                    <div className="event-icon">{event.icon}</div>
                    <div className="event-info">
                      <h4>{event.name}</h4>
                      <p className="event-location">📍 {event.location}</p>
                      <span className={`event-type ${event.type}`}>{event.type.replace('_', ' ')}</span>
                    </div>
                    {isCompleted && <span className="completed-check">✓</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {events.length === 0 && (
          <div className="no-events">
            <p>No events currently scheduled for this building.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildingDetails;
