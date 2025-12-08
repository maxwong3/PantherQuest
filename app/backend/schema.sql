-- Drop existing tables if they exist
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS buildings CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS user_events CASCADE;

-- Create buildings table
CREATE TABLE buildings (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  latitude DECIMAL(10, 7) NOT NULL,
  longitude DECIMAL(10, 7) NOT NULL,
  type VARCHAR(50),
  description TEXT,
  departments TEXT[],
  classrooms TEXT[],
  sprite VARCHAR(10)
);

-- Create events table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  building_id VARCHAR(50) REFERENCES buildings(id),
  location VARCHAR(200),
  type VARCHAR(50),
  icon VARCHAR(10),
  description TEXT,
  date DATE,
  time VARCHAR(50),
  is_active BOOLEAN DEFAULT true
);

-- Create users table (for future use)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  name VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create user_events junction table (for tracking user quest lists)
CREATE TABLE user_events (
  user_id INTEGER REFERENCES users(id),
  event_id INTEGER REFERENCES events(id),
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, event_id)
);

-- Create indexes for better performance
CREATE INDEX idx_events_building ON events(building_id);
CREATE INDEX idx_events_date ON events(date);
CREATE INDEX idx_user_events_user ON user_events(user_id);
