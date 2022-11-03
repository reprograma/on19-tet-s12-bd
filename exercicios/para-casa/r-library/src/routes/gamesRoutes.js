const controller = require("../controller/gamesController")

const express = require ("express")

const routes = express.Router()

routes.get('/all', controller.getAllGames)

routes.post('/new', controller.newGame)

routes.post ('/originalData', controller.originalData)

module.exports = routes