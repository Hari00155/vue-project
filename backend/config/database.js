const Sequelize = require('sequelize');
module.exports = new Sequelize('college', 'postgres', 'Data@123', {
 host: 'localhost',
 dialect: 'postgres', // Change to your database type
});