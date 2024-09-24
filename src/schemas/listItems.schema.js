const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
 const ListItem = sequelize.define(
    'ListItem', {
        libelle: {
            type: DataTypes.STRING
        }
    }
 )
}