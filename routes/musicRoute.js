var express = require('express');
var router = express.Router();
var musicController = require('../controllers/musicController')
const { multer, sendUploadToGCS } = require('../helpers')

router.get('/', musicController.getAll)
router.get('/search', musicController.getAll)
router.post('/lyric', musicController.getLyric)
router.post('/', multer.single('url'), sendUploadToGCS, musicController.updload)

module.exports = router