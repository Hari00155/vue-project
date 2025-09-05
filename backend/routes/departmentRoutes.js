const express = require('express')
const router = express.Router()
const departmentController = require('../controllers/departmentController')
// Route to get all todos
router.get('/departments', departmentController.getAllDepartments)

// Route to create a new todo
router.post('/departments', departmentController.createDepartment);

// // Route to get a todo by ID
router.get('/departments/:id', departmentController.getDepartmentById);
// // Route to update a todo by ID
router.put('/departments/:id', departmentController.updateDepartmentById);
// // Route to delete a todo by ID
// router.delete('/:id', todoController.deleteTodo);
module.exports = router
