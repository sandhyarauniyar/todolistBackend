const config = require('../config/dbConfig.js');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, config.otherConfig);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize;
db.models = {};
db.models.tasklist = require('./todoList.js')(sequelize, Sequelize.DataTypes);
module.exports = db;