const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
 const Item = sequelize.define(
    'Item', {
       available: DataTypes.BOOLEAN
    }
 )
}