var express = require('express');
var router = express.Router();
var musicController = require('../controllers/musicController')
const { multer, sendUploadToGCS } = require('../helpers')

const { isLogin } = require('../middlewares/isLogin')

router.get('/', musicController.getAll)
router.get('/search', musicController.getAll)
router.post('/lyric', musicController.getLyric)
router.post('/', isLogin, multer.single('url'), sendUploadToGCS, musicController.updload)
router.get('/playlist', isLogin, musicController.findAllMusic)

module.exports = router