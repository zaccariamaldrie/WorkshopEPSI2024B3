import express from "express"
import {connect, createUser, getUser} from "../controllers/user.controller.js"

const router = express.Router();

router.post("/login", async function (req, res, next) {
  var user = {
    username: req.body.username,
    password: req.body.password,
}
  const canConnect = await connect(user.username, user.password)
  res.send(canConnect)
})

router.post('/create', async(req, res, next) => {
    var user = {
        username: req.body.username,
        password: req.body.password,
        admin: false
    }
    const exist = await getUser(user.username)
    if(!exist){
      await createUser(user.username, user.password).then(data => res.status(201).json(data)).catch(err => console.log("Erreur: " + err))
    }else {
      res.send(false)
    }
})

export default router