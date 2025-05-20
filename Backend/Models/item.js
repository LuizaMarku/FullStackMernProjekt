const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemName:{
        type: String
    }, 
    itemDescription:{
        type: String
    }, 

    itemLocation:{
        type: String
    }, 

    itemImage:{
        type: String
    }, 
    
    itemAreaSize: {
         type: String, 
  },
  itemStartDate: {
         type: String, 
  },
  itemEndDate: {
         type: String,
  },
  itemStatus: {
    type: String,
  },

})

const Item = mongoose.model("Item", itemSchema) 
module.exports = Item