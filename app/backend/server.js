const express = require('express')
const path = require('path')
const db = require('./db')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
})

app.get('/health', (req, res) =>  {
    db.one('SELECT $1 AS value', 123)
    .then((data) => {
        res.json('status: ok')
        console.log('DATA:', data.value)
    })
    .catch((error) => {
        res.json('status: db connection failed')
        console.log('ERROR:', error)
    })
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  console.log("API call: /home")
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  if (username === 'test' && password === 'test') {
    return res.json({ username, name: 'Test User' });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
})

// API Routes

// Get all buildings
app.get('/api/buildings', async (req, res) => {
  try {
    const buildings = await db.any('SELECT * FROM buildings ORDER BY name');
    // Convert lat/lng and arrays back to frontend format
    const formattedBuildings = buildings.map(b => ({
      id: b.id,
      name: b.name,
      position: [parseFloat(b.latitude), parseFloat(b.longitude)],
      type: b.type,
      description: b.description,
      departments: b.departments || [],
      classrooms: b.classrooms || [],
      sprite: b.sprite
    }));
    res.json(formattedBuildings);
  } catch (error) {
    console.error('Error fetching buildings:', error);
    res.status(500).json({ error: 'Failed to fetch buildings' });
  }
});

// Get all events
app.get('/api/events', async (req, res) => {
  try {
    const events = await db.any('SELECT * FROM events WHERE is_active = true ORDER BY date');
    const formattedEvents = events.map(e => ({
      id: e.id,
      name: e.name,
      building_id: e.building_id,
      location: e.location,
      type: e.type,
      icon: e.icon,
      description: e.description,
      date: e.date,
      time: e.time,
      isActive: e.is_active
    }));
    res.json(formattedEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// Get events by building
app.get('/api/buildings/:buildingId/events', async (req, res) => {
  try {
    const { buildingId } = req.params;
    const events = await db.any(
      'SELECT * FROM events WHERE building_id = $1 AND is_active = true ORDER BY date',
      [buildingId]
    );
    const formattedEvents = events.map(e => ({
      id: e.id,
      name: e.name,
      building_id: e.building_id,
      location: e.location,
      type: e.type,
      icon: e.icon,
      description: e.description,
      date: e.date,
      time: e.time,
      isActive: e.is_active
    }));
    res.json(formattedEvents);
  } catch (error) {
    console.error('Error fetching events for building:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// Get single event by ID
app.get('/api/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const event = await db.oneOrNone('SELECT * FROM events WHERE id = $1', [id]);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json({
      id: event.id,
      name: event.name,
      building_id: event.building_id,
      location: event.location,
      type: event.type,
      icon: event.icon,
      description: event.description,
      date: event.date,
      time: event.time,
      isActive: event.is_active
    });
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})