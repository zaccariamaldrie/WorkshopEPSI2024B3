const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
 const Reservation = sequelize.define(
    'Reservation', {
        date_debut: {
            type: DataTypes.DATE
        },

        date_fin: {
            type: DataTypes.DATE
        }
    }
 )
}