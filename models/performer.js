const mongoose = require('mongoose')

const performerSchema = new mongoose.Schema({
    name: { type: String, require: true },
    birthDate: { type: String, require: true },
    credits: { type: mongoose.Schema.ObjectId, ref: 'Movie' }
})

const Performer = mongoose.model('Performer', performerSchema)

modules.exports = Performer