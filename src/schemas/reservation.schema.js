export default (sequelize, Sequelize) => sequelize.define(
        'Reservation', {
            date_debut: {
                type: Sequelize.DATEONLY
            },
    
            date_fin: {
                type: Sequelize.DATEONLY
            }
        }
     )

