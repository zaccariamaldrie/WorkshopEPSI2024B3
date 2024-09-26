export default (sequelize, Sequelize) => sequelize.define(
    'ListItem', {
        libelle: {
            type: Sequelize.DataTypes.STRING
        }
    }
 )