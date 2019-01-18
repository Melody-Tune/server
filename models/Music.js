const mongoose = require('mongoose')

const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "song title can't be empty"]
  },
  artist: {
    type: String, 
    required: [true, "artist name can't be empty"]
  },
  url: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: `User`
  }
})

const Music = mongoose.model(("Music"), MusicSchema)

module.exports = Music