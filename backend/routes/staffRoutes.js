const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffController')
// Route to get all todos
router.get('/staffs', staffController.getAllStaffs)
// // Route to create a new todo
// router.post('/', todoController.createTodo);
router.post('/staffs', staffController.createStaff)

// // Route to get a todo by ID
router.get('/staffs/:id', staffController.getStaffById);
// // Route to update a todo by ID
// router.put('/:id', todoController.updateTodo);
// // Route to delete a todo by ID
// router.delete('/:id', todoController.deleteTodo);
module.exports = router
