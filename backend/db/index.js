const mongoose = require('mongoose');
mongoose.connect('');

const userSchema = new mongoose.Schema({
    username : String,
    password : String
})

const cancleSchema = new mongoose.Schema({
    ticketData : {
        passangerName: String,
        flightName : String,
        flightNo : String,
        date : String
    },
    reasonForExit : String,
    csifOfficerName : String,
    csifOfficerId : String,
    airlineStaffName : String,
    airlineStaffId : String
})

const User = mongoose.model("User", userSchema);
const Cancle = mongoose.model("Cancle", cancleSchema);


module.exports = { 
    User ,
    Cancle
} 
