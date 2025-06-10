const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
// Route to get all todos
router.get('/students', studentController.getAllStudents)
// // Route to create a new todo
// router.post('/', todoController.createTodo);
router.post('/students', studentController.createStudent)
// // Route to get a todo by ID
// router.get('/:id', todoController.getTodoById);
// // Route to update a todo by ID
// router.put('/:id', todoController.updateTodo);
// // Route to delete a todo by ID
// router.delete('/:id', todoController.deleteTodo);
module.exports = router
