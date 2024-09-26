import database from "../cfg/database.js";

async function getItem(item_id) {
    const item = await database.items.findAll({
        where: { id: item_id },
        include: database.listItems
    })
    return item
}

async function getListItems() {
    const listItems = await database.items.findAll({
        where: {
            available: true
        },
        include: database.listItems
    })
    return listItems
}

async function addItem(list_id) {
    await database.items.create({
        ListItemId: list_id,
        available: true
    }).then((data) => {
        console.log(data)
    }).catch(err => console.log("Erreur: " + err))
}

async function addLibelle(libelle) {
    await database.listItems.create({
        libelle: libelle
    }).then((data) => {
        console.log(data)
    }).catch(err => console.log("Erreur: " + err))
}

async function getLibelle(name) {
    const libelle = await database.listItems.findAll({
        where: { libelle: name }
    })
    console.log(libelle)
    if(libelle > []) return true
}

async function switchDispo(id_item) {
    const item = await getItem(id_item)
    if(item[0].available){
        await database.items.update(
            { available: false },
            {
                where: {
                    id: id_item
                }
            }
        )
    } else {
        await database.items.update(
            { available: true },
            {
                where: {
                    id: id_item
                }
            }
        )
    }
    console.log(item[0].available)
}

export {
    getItem,
    getListItems,
    addItem,
    addLibelle,
    getLibelle,
    switchDispo
}