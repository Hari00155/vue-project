const Department = require('../models/department')

// Controller method to get all todos
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll()
    res.json(departments)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body)
    res.json(department)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}


exports.getDepartmentById = async (req, res) => {
  try {
    const id = req.params['id']
    const Department = await Department.findByPk(id);
    res.json(Department)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
