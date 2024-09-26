import express from "express"
import { addItem, addLibelle, getItem, getLibelle, getListItems, switchDispo } from "../controllers/item.controller.js"

const router = express.Router()

router.get("/getItem/:item_id", async function (req, res, next) {
    const item = await getItem(req.params.item_id)
    res.send(item)
})

router.get("/getListItems", async(req, res, next) => {
    const listItems = await getListItems()
    res.send(listItems)
})

router.post('/addItem', async(req, res, next) => {
    let libelle = req.body.libelle
    await addItem(libelle).then(data => res.status(201).json(data)).catch(err => console.log("Erreur: " + err))
})

router.post('/addLibelle', async(req, res, next) => {
    let name = req.body.libelle
    let exist = await getLibelle(name)
    if(!exist) {
        await addLibelle(name).then(data => res.status(201).json(data)).catch(err => console.log("Erreur: " + err))
    }else {
        res.send(false)
    }
})

router.post('/switch', (req, res, next) => {
    switchDispo(req.body.item)
})

export default router