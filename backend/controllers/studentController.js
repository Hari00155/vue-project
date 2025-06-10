const Student = require('../models/student')

// Controller method to get all todos
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      order: [['id', 'ASC']],
    })
    res.json(students)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student )
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}