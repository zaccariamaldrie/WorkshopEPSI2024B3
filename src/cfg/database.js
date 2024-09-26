import { Sequelize } from "sequelize"
import userSchema from '../schemas/user.schema.js'
import listItemsSchema from '../schemas/listItems.schema.js'
import itemSchema from '../schemas/item.schema.js'
import reservationSchema from '../schemas/reservation.schema.js'


const sequelize = new Sequelize('workshop_test', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
})

const database = {}

database.Sequelize = Sequelize
database.sequelize = sequelize

database.user = userSchema(sequelize, Sequelize)
database.listItems = listItemsSchema(sequelize, Sequelize)
database.items = itemSchema(sequelize, Sequelize)
database.reservation = reservationSchema(sequelize, Sequelize)

database.items.belongsTo(database.listItems)
database.reservation.belongsTo(database.user)
database.reservation.belongsTo(database.items)

export default database