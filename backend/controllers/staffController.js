const Staff = require('../models/staff')


// Controller method to get all todos
exports.getAllStaffs = async (req, res) => {
  try {
    const staffs = await Staff.findAll()
    res.json(staffs)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

exports.createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body)
    res.json(staff)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}


exports.getStaffById = async (req, res) => {
  try {
    const id = req.params['id']
    const staff = await Staff.findByPk(id);
    res.json(staff)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}