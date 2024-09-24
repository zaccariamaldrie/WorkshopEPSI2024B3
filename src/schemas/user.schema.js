const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
 const User = sequelize.define(
    'User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }, 

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }
 )
}