const express = require ('express')
const cors = require ('cors')
const mongoose = require ('./src/database/mongooseConnect')
const gameRoutes = require ('./src/routes/gamesRoutes')

const app = express()

app.use (express.json())
app.use (cors())
mongoose.connect()

app.use ('/library/games', gameRoutes)

module.exports = app