const Sequelize = require('sequelize');
const db = require('../config/database');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
   lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
   email: {
    type: Sequelize.STRING,
    
  },
   age: {
    type: Sequelize.INTEGER,
    
  },
   bloodGroup: {
    type: Sequelize.STRING,
    field: 'blood_group'
  },
   dob: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
   mobileNo: {
    type: Sequelize.STRING,
    field: 'mobile_no'
  },
   currentYear: {
    type: Sequelize.STRING,
    field: 'current_year'
  },
   createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
   departmentId: {
    type: Sequelize.INTEGER,
    field: 'department_id'
  },
},{
  timestamps:false
}
);
module.exports = Student;