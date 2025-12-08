import React, { useEffect, useState } from 'react';
import './Building.css';
import { buildingAPI } from '../services/api';

const BuildingDetails = ({ building, events, onClose, onEventClick, visitedBuildings, completedEvents, user }) => {
  const isVisited = visitedBuildings.includes(building.id);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formState, setFormState] = useState({ rating: 5, comment: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchReviews = async (targetPage = page) => {
      // Pull a paginated slice of reviews for this building
      setReviewsLoading(true);
      setError(null);
      try {
        const data = await buildingAPI.getReviews(building.id, { page: targetPage, pageSize: 5 });
        setReviews(data.reviews);
        setPage(data.page);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error('Failed to fetch building reviews:', err);
        setError('Could not load reviews for this building.');
      } finally {
        setReviewsLoading(false);
      }
    };

    fetchReviews();
  }, [building.id, page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit a review then refresh page 1 so newest shows first
    setSubmitting(true);
    setError(null);

    try {
      await buildingAPI.addReview(building.id, {
        rating: Number(formState.rating),
        comment: formState.comment,
        userId: user?.id,
      });
      setFormState({ rating: 5, comment: '' });
      // reload first page to show the newest review on top
      const updated = await buildingAPI.getReviews(building.id, { page: 1, pageSize: 5 });
      setReviews(updated.reviews);
      setPage(updated.page);
      setTotalPages(updated.totalPages);
    } catch (err) {
      console.error('Failed to submit review:', err);
      setError(err.message || 'Submit failed, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

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

        <div className="section building-reviews">
          <div className="reviews-header">
            <h3>⭐ Building Reviews</h3>
            {reviewsLoading && <span className="reviews-loading">Loading...</span>}
          </div>

          {reviews.length === 0 && !reviewsLoading && (
            <p className="no-reviews">No reviews yet — be the first!</p>
          )}

          <div className="review-list">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-top">
                  <span className="review-user">{review.username}</span>
                  <span className="review-rating">{review.rating} / 5</span>
                </div>
                {review.comment && <p className="review-comment">{review.comment}</p>}
                <span className="review-date">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="review-pagination">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              >
                Prev
              </button>
              <span className="page-indicator">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              >
                Next
              </button>
            </div>
          )}

          <form className="review-form" onSubmit={handleSubmit}>
            <h4>Leave a review</h4>
            <div className="form-row">
              <label>
                Rating
                <select
                  value={formState.rating}
                  onChange={(e) => setFormState({ ...formState, rating: Number(e.target.value) })}
                >
                  {[5, 4, 3, 2, 1].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Comment (optional)
                <textarea
                  value={formState.comment}
                  onChange={(e) => setFormState({ ...formState, comment: e.target.value })}
                  placeholder="Share your experience or quick tips..."
                />
              </label>
            </div>
            <div className="form-actions">
              <button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Post review'}
              </button>
            </div>
            {error && <div className="reviews-error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetails;
