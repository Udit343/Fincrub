const {Schema} = require("mongoose");

const newSchema=new Schema({
      username: {type: String, required: true },
      email: {type: String, required: true, unique: true},
      password: {type:String, required: true},
})

module.exports={newSchema};