const express = require('express')
const router = express.Router()
const departmentController = require('../controllers/departmentController')
// Route to get all todos
// router.get('/departments', departmentController.getAlldepartments);

// Route to create a new todo
router.post('/departments', departmentController.createDepartment);

// // Route to get a todo by ID
router.get('departments/:id', departmentController.getDepartmentById);
// // Route to update a todo by ID
// router.put('/:id', todoController.updateTodo);
// // Route to delete a todo by ID
// router.delete('/:id', todoController.deleteTodo);
module.exports = router
