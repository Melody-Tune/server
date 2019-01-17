var express = require('express');
var router = express.Router();
var musicController = require('../controllers/musicController')

router.get('/', musicController.getAll)
router.get('/search', musicController.getAll)
router.post('/lyric', musicController.getLyric)
router.post('/', musicController.updload)

module.exports = router