const { response } = require("express")
const gamesModel = require ("../models/gamesModel")
const originalDataList = require ("../originalData/originalData")

const getAllGames = async (req, res) => {
    try {
        const allGames = await gamesModel.find({}, null)
        res.status(200).json(allGames)
    }
    catch {
        res.status(500).json({message: error.message})
    }
}

const getGameByID = async (req, res) => {
    try {
        const { id } = req.params
        const findGame = await gamesModel.findById(id)
        if (! findGame.length) {
            return res.status(404).json({message: "ID not found"})
        }
        res.status(200).json(findGame)
    }
    catch (error) {
        console.log (500).json({message: error.message})
    }
}

const getGameFilters = async (req, res) => { // TO BE DONE
    const { title, year, genre, dev } = req.query

    const findGames = await gamesModel
}

const newGame = async (req, res) => {
    try {
        const {
            title,
            launchYear,
            steamAvailability,
            price,
            genre,
            developer
        } = req.body

        const newGame = new gamesModel ({
            title,
            launchYear,
            steamAvailability,
            price,
            genre,
            developer
        })

        const savedGame = await newGame.save()
        res.status(201).json({message: "New game added to database:", savedGame})
    }
    catch(error){
        console.log (error.message)
        res.status(500).json({message: error.message})
    }
}

const originalData = (req, res) => {
    const { origData } = req.query
    if (origData) {
        const errors = []
         originalDataList.forEach (async gameInfo => {
            try {
                const {
                    title,
                    launchYear,
                    steamAvailability,
                    price,
                    genre,
                    developer
                } = gameInfo
        
                const newGame = new gamesModel ({
                    title,
                    launchYear,
                    steamAvailability,
                    price,
                    genre,
                    developer
                })
                const savedGame = await newGame.save()
            }
            catch(error){
                errors.push(error)
            }
        });
        if (errors.length > 0){
           console.log (errors)
           return res.status(400).json({message: 'Check console for error data'})
        }
        return res.status(201).json({message: 'Original data restored!'})
    }
    res.status(404).json({message: 'address not found'})
}

module.exports = {
    getAllGames,
    getGameByID,
    newGame,
    originalData
}