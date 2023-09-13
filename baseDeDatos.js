const { Sequelize } = require('sequelize');

const dbName = process.env.DB_NAME
const dbUserName = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD

const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
    host:'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;