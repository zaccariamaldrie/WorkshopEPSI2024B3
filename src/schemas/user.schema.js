export default (sequelize, Sequelize) => sequelize.define(
        'User', {
            username: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            }, 
    
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            
            admin: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
            }
        }
     )
