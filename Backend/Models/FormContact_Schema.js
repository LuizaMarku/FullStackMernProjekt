const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
emri: {
    type: String,
    required: true,
    
},
mbiemri: {
    type: String,
    required: true,
},

email:{
    type: String,
    required: true
},
fushainteresit:{
    type: String,
    required: true,
},
mesazhi:{
    type: String,
    required: true,
}

});

const Form =  mongoose.model('Form', formSchema);
module.exports = Form;

