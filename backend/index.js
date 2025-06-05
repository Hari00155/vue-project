const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

const studentRoutes = require('./routes/studentRoutes');
const db = require('./config/database');

// Connect to the database
db.authenticate()
 .then(() => console.log('Database connected'))
 .catch((err) => console.error('Error connecting to database:', err));

// Allow all origins
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

app.use(studentRoutes)

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
