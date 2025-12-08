// API service for backend communication

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

// Helper function for API calls
async function apiCall(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}

// Building APIs
export const buildingAPI = {
  // Get all buildings
  getAll: () => apiCall('/api/buildings'),

  // Get events for a specific building
  getEvents: (buildingId) => apiCall(`/api/buildings/${buildingId}/events`),
};

// Event APIs
export const eventAPI = {
  // Get all events
  getAll: () => apiCall('/api/events'),

  // Get single event by ID
  getById: (id) => apiCall(`/api/events/${id}`),
};

// Auth APIs
export const authAPI = {
  login: (username, password) =>
    apiCall('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),
};

// User Quest List APIs
export const questListAPI = {
  // Get user's quest list
  get: (userId) => apiCall(`/api/users/${userId}/questlist`),
  
  // Add event to quest list
  add: (userId, eventId) => 
    apiCall(`/api/users/${userId}/questlist/${eventId}`, {
      method: 'POST',
    }),
  
  // Remove event from quest list
  remove: (userId, eventId) =>
    apiCall(`/api/users/${userId}/questlist/${eventId}`, {
      method: 'DELETE',
    }),
};

export default {
  buildingAPI,
  eventAPI,
  authAPI,
  questListAPI,
};
