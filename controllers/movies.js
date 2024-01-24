const Movie = require('../models/movie')

exports.create = async function(req, res) {
    try {
        const createdMovie = await Movie.create(req.body)
        res.status(200).json(createdMovie)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}

exports.index = async function(req, res) {
    try {
        const foundMovies = await Movie.find({})
        res.status(200).json(foundMovies)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
    
}

exports.show = async function(req, res) {
    try {
        const foundMovie = await Movie.findOne({ _id: req.params.id })
        res.status(200).json(foundMovie)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}

exports.addPerformer = async function(req, res) {
    
}