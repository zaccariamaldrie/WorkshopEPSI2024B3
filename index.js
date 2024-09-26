import express from "express"
import database from "./src/cfg/database.js"
import userRouter from "./src/routes/connect.route.js"
import itemRouter from "./src/routes/item.route.js"
import reservationRouter from "./src/routes/reservation.route.js"

const app = express()

app.use(express.json())

database.sequelize.sync().then(() => {
    console.log('BDD OK')
})

app.use('/user', userRouter)
app.use('/items', itemRouter)
app.use('/reservation', reservationRouter)

app.get('/', (req, res) => res.status(200).send("IT's working chef"))

app.listen(3000, () => console.log('Done.'))