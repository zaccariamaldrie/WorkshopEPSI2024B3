export default (sequelize, Sequelize) => sequelize.define(
      'Item', {
         available: {
            type: Sequelize.DataTypes.BOOLEAN
         }
      }
   )
