const Student = require('../models/student')

// Controller method to get all todos
exports.getAllStudents = async (req, res) => {
  try {
    const todos = await Student.findAll()
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
