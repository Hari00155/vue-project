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

exports.getStudentById = async (req, res) => {
  try {
    const id = req.params['id']
    const student = await Student.findByPk(id);
    res.json(student)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

exports.updateStudentById = async (req, res) => {
  try {
    const id = req.params['id']

    const dbUserResult = await Student.findByPk(id)
    const dataToSave = { dbUserResult, ...req.body }

    const student = await Student.upsert(dataToSave)
    res.json(student)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}