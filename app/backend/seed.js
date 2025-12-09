const db = require('./db');
const { buildings, events } = require('../frontend/src/components/InitialData');

const buildingReviews = [
  { buildingId: 'cathedral', userId: 1, rating: 5, comment: 'Nationality Rooms are a must-see.' },
  { buildingId: 'hillman', userId: 1, rating: 4, comment: 'Plenty of study space, can get busy midterms.' },
  { buildingId: 'wpu', userId: 1, rating: 4, comment: 'Great hub for student orgs and grab-and-go food.' },
  { buildingId: 'benedum', userId: 1, rating: 3, comment: 'Labs are solid but elevators are slow.' },
  { buildingId: 'sennott', userId: 1, rating: 5, comment: 'Modern classrooms and lots of charging ports.' }
];

async function seedDatabase() {
  try {
    console.log('Starting database seed...');

    // Clear existing data
    await db.none('TRUNCATE buildings, events, users RESTART IDENTITY CASCADE');
    console.log('Cleared existing data');

    // create tables:
    await db.none(`
        DROP TABLE IF EXISTS buildings CASCADE; 
        DROP TABLE IF EXISTS events CASCADE;
        DROP TABLE IF EXISTS users CASCADE;

        CREATE TABLE buildings (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          latitude DOUBLE PRECISION NOT NULL,
          longitude DOUBLE PRECISION NOT NULL,
          type TEXT NOT NULL,
          description TEXT,
          departments TEXT[] DEFAULT '{}',
          classrooms TEXT[] DEFAULT '{}',
          sprite TEXT
        );

        CREATE TABLE IF NOT EXISTS events (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          building_id TEXT NOT NULL REFERENCES buildings(id),
          location TEXT,
          type TEXT,
          icon TEXT,
          description TEXT,
          date DATE,
          time TEXT,
          is_active BOOLEAN DEFAULT TRUE
        );

        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username TEXT NOT NULL UNIQUE,
          password_hash TEXT NOT NULL,
          name TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        

      
      
      `);

    // Insert test users
    console.log('Inserting test users...');
    await db.none(
      `INSERT INTO users (username, password_hash, name) VALUES ($1, $2, $3)`,
      ['testname', 'testpass', 'Test User']
    );
    console.log('Inserted test users');

    // Insert buildings
    console.log('Inserting buildings...');
    for (const building of buildings) {
      await db.none(
        `INSERT INTO buildings (id, name, latitude, longitude, type, description, departments, classrooms, sprite) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          building.id,
          building.name,
          building.position[0],
          building.position[1],
          building.type,
          building.description,
          building.departments,
          building.classrooms,
          building.sprite
        ]
      );
    }
    console.log(`Inserted ${buildings.length} buildings`);

    // Insert events
    console.log('Inserting events...');
    for (const event of events) {
      await db.none(
        `INSERT INTO events (name, building_id, location, type, icon, description, date, time, is_active) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          event.name,
          event.building_id,
          event.location,
          event.type,
          event.icon,
          event.description,
          event.date,
          event.time,
          event.isActive
        ]
      );
    }
    console.log(`Inserted ${events.length} events`);

    // Insert building reviews
    console.log('Inserting building reviews...');
    for (const review of buildingReviews) {
      await db.none(
        `INSERT INTO building_reviews (building_id, user_id, rating, comment)
         VALUES ($1, $2, $3, $4)`,
        [review.buildingId, review.userId, review.rating, review.comment]
      );
    }
    console.log(`Inserted ${buildingReviews.length} building reviews`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
