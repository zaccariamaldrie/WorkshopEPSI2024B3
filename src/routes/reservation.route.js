import express from "express"
import { createReservation, getReservation, getReservationsItem, getReservationsUser } from "../controllers/reservation.controller.js"

const router = express.Router()

router.post('/reservation/:id_reservation', async(req, res, next) => {
    const reservation = await getReservation(req.params.id_reservation)
    res.send(reservation)
})

router.post('/user/:id_user', async(req, res, next) => {
    const reservations = await getReservationsUser(req.params.id_user)
    res.send(reservations)
})

router.post('/item/:id_item', async(req, res, next) => {
    const reservations = await getReservationsItem(req.params.id_item)
    res.send(reservations)
})

router.post('/create', async(req, res, next) => {
    let user = req.body.user_id
    let item = req.body.item_id
    let date = req.body.date

    await createReservation(user, item, date).then(data => res.status(201).json(data)).catch(err => console.log("Erreur: " + err))
})

export default router