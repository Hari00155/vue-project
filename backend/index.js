const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

// Allow all origins
app.use(cors());

// Rest API creation
app.get('/', (req, res) => {
  res.send('Welcome to Express JS!!!')
})

// Rest API creation
app.get('/students', (req, res) => {

  // get all students from database

  let students = {
    name: 'Hari',
    age: '20',
    city: 'Chennai'
  }

  res.send(students)
})

// app.get('/students')

// app.get('/students/id')

// // To Create
// app.post('/students')

// // To update
// app.put('/students')

// // To update
// app.delete('/students/id')



// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // Replace * with your origin if needed
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
