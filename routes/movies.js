const express = require('express')
const router = express.Router()

const movieCtrl = require('../controllers/movies')

router.post('/', movieCtrl.create)
router.get('/', movieCtrl.index)
router.get('/:id', movieCtrl.show)
router.patch('/:movieId/performers/:performerId', movieCtrl.addPerformer)

module.exports = router