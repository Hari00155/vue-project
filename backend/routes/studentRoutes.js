const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
// Route to get all todos
router.get('/students', studentController.getAllStudents)
// // Route to create a new todo
// router.post('/', todoController.createTodo);
router.post('/students', studentController.createStudent)

// Route to get a student by ID
router.get('/students/:id', studentController.getStudentById);
// // Route to update a todo by ID
router.put('/students/:id', studentController.updateStudentById);
// Route to delete a todo by ID
// router.delete('/:id', todoController.deleteTodo);
module.exports = router
