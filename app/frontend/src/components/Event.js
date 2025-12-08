import React from 'react';
import './Event.css';

const Event = ({ event, onClose }) => {
  const getEventTypeColor = (type) => {
    const colors = {
      career: '#2f6bff',
      workshop: '#10b981',
      tour: '#f59e0b',
      support: '#8b5cf6',
      social: '#ec4899',
      default: '#6b7280'
    };
    return colors[type] || colors.default;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="event-overlay" onClick={onClose}>
      <div className="event-modal" onClick={(e) => e.stopPropagation()}>
        <button className="event-close-button" onClick={onClose}>
          ✕
        </button>

        <div className="event-header" style={{ background: getEventTypeColor(event.type) }}>
          <div className="event-icon">{event.icon}</div>
          <div className="event-header-content">
            <h2 className="event-title">{event.name}</h2>
            <div className="event-type-badge">
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </div>
          </div>
        </div>

        <div className="event-body">
          <div className="event-info-section">
            <div className="event-info-item">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-value">{event.location}</span>
              </div>
            </div>

            <div className="event-info-item">
              <span className="info-icon">📅</span>
              <div className="info-content">
                <span className="info-label">Date</span>
                <span className="info-value">{formatDate(event.date)}</span>
              </div>
            </div>

            <div className="event-info-item">
              <span className="info-icon">⏰</span>
              <div className="info-content">
                <span className="info-label">Time</span>
                <span className="info-value">{event.time}</span>
              </div>
            </div>
          </div>

          <div className="event-description">
            <h3>About This Event</h3>
            <p>{event.description}</p>
          </div>

          {event.requirements && event.requirements.length > 0 && (
            <div className="event-requirements">
              <h3>Requirements</h3>
              <ul>
                {event.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
