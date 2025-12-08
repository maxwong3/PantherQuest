const express = require('express')
const path = require('path')
const db = require('./db')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../app/build')));

app.get('/', (req, res) => {
  res.send('Hello World!')
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
  res.sendFile(path.join(__dirname, 'build/index.html'));
  console.log("API call: /home")
})

app.post('/login', (req, res) => {
  console.log("API call: /login")
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})