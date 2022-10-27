const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors())
const port = 5000

const courses= require('./data/catagories.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/courses', (req, res) => {
  res.send(courses)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})