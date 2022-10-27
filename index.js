const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors())
const port = 5000

const courses = require('./data/catagories.json')
app.get('/', (req, res) => {
  res.send('mY PAGE ')
})


app.get('/courses', (req, res) => {
  res.send(courses)
})
app.get('/courses/:_id', (req, res) => {
  const ID= req.params._id;
  console.log(req.params._id)
  const wnatedCourse =  courses.find(c=>c.id === ID);
  res.send(wnatedCourse)

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})