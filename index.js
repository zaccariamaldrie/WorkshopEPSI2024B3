const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()
const port = 3000

app.use(express.json())

const sequelize = new Sequelize('workshop_test', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
})

const User = require('./src/schemas/user.schema')(sequelize)
const Reservation = require('./src/schemas/reservation.schema')(sequelize)
const Item = require('./src/schemas/item.schema')(sequelize)
const ListItem = require('./src/schemas/listItems.schema')(sequelize)

Reservation.belongsTo(User)
Reservation.belongsTo(Item)
Item.belongsTo(ListItem)

sequelize.sync().then(() => {
    console.log('BDD OK')
})

app.get('/', (req, res) => res.status(200).send("IT's working chef"))

app.listen(3000, () => console.log('Done.'))