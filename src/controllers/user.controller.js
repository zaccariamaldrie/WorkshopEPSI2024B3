import database from "../cfg/database.js"

async function connect(username, password) {
    const isUser = await database.user.findAll({
        where: { username: username, password: password}
    })
    return isUser
}

async function getUser(username) {
    const user = await database.user.findAll({
        where: {username: username}
    })
    console.log(user)
    if(user > []){ return true }
}

async function createUser(username, password) {
    await database.user.create(
        {
            username: username,
            password: password,
            admin: false
        }
    ).then((data) => {
        console.log(data)
    })
}

export {
    connect,
    getUser,
    createUser
}