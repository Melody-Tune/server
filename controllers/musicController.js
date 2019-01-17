const Music = require('../models/Music')
const axios = require('axios')

class MusicController {
  static getAll(req, res, next) {
    let query = {}

    if (req.query.q) {
      query = {
        title: {
          $regex: '.*' + req.query.q + '.*',
          $options: "i"
        }
      }
    }

    Music
      .find(query)
      .then(response => {
        res
          .status(200)
          .json({
            message: "get data success",
            response
          })
      })
      .catch(error => {
        res
          .status(400)
          .json({
            message: "data not found",
            error
          })
      })
  }

  static updload(req, res, next) {
    let body = {
      title: req.body.title,
      artist: req.body.artist
    }

    Music
      .create(body)
      .then(response => {
        res
          .status(201)
          .json({
            message: "create success",
            response
          })
      })
      .catch(error => {
        res
          .status(400)
          .json({
            message: "internal server error",
            error
          })
      })
  }

  static getLyric(req, res, next) {
    console.log(req.body)

    axios({
      method: "GET",
      url: `https://api.lyrics.ovh/v1/${req.body.artist}/${req.body.title}`
    })
      .then(lyric => {
        console.log(lyric)
        let formatted = lyric.data.lyrics.replace(/\n/g, '<br>')
        res
          .status(200)
          .json({ data: formatted })
      })
      .catch(error => {
        res
          .status(400)
          .json({
            message: "data not found",
            error
          })
      })
  }
}

module.exports = MusicController