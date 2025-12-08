const db = require('./db');
const { buildings, events } = require('../frontend/src/components/InitialData');

async function seedDatabase() {
  try {
    console.log('Starting database seed...');

    // Clear existing data
    await db.none('TRUNCATE buildings, events RESTART IDENTITY CASCADE');
    console.log('Cleared existing data');

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

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
