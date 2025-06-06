const Sequelize = require('sequelize')
const db = require('../config/database')

const Department = db.define(
  'departments',
  {
    deptName: {
      type: Sequelize.STRING,
      field: 'dept_name',
    },
    email: {
      type: Sequelize.STRING,
    },
    hod: {
      type: Sequelize.STRING,
    },
    noOfStaff: {
      type: Sequelize.INTEGER,
      field: 'no_of_staff',
    },
    noOfLabs: {
      type: Sequelize.INTEGER,
      field: 'no_of_labs',
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
    },
  },
  {
    timestamps: false,
  },
)
module.exports = Department
