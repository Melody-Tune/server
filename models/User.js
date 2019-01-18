const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email must be filled'],
    validate: [{
      validator: function(value) {
        return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
      }, 
      message: `Please enter a valid email`
    }, { 
      validator : function(value, cb) {
        return new Promise( function(resolve, reject) {
          User.findOne({ 
            email : value 
          }, function(err, data){
            if(err) throw error
            else{
              if (data){
                reject(false)
              }else{
                resolve(true)
              }
            }
          })
        })
      },
      message: 'Email already been used'
    }]
  },
  password: {
    type: String
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User