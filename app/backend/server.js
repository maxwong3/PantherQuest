const express = require('express')
const path = require('path')
const db = require('./db')
const app = express()
const port = 3000

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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})