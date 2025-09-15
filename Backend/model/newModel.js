const mongoose=require("mongoose");

const {newSchema}=require("../schemas/newSchema");

const newModel=mongoose.model("user",newSchema);

module.exports={newModel};