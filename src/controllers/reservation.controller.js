import database from "../cfg/database.js";
import { switchDispo } from "./item.controller.js";

async function getReservation(reservation_id) {
    const reservation = await database.reservation.findAll({
        where: { id: reservation_id},
        include: database.items,
    })
    return reservation
}

async function getReservationsUser(user_id) {
    const reservations = await database.reservation.findAll({
        where: { UserId: user_id }
    })
    return reservations
}

async function getReservationsItem(item_id) {
    const reservations = await database.reservation.findAll({
        where: { ItemId: item_id},
        include: database.user
    })
    return reservations
}

async function createReservation(user_id, item_id, date) {
    console.log(user_id)
    console.log(new Date(date).toISOString().slice(0, 10)
)
    await switchDispo(item_id)
    await database.reservation.create({
        date_debut: await new Date().toISOString().slice(0, 10),
        date_fin: await new Date(date).toISOString().slice(0, 10),
        UserId: user_id,
        ItemId: item_id
    }).then((data) => {
        console.log(data)
    }).catch(err => console.log("Erreur: " + err))
}

export {
    getReservation,
    getReservationsUser,
    getReservationsItem,
    createReservation
}