const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) =>  {
    res.json('status: ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})