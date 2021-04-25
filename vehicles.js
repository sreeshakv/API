const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vehicle = new Schema ({
 registrationNumber: {
     type : String 
 },
 vehicleType :{
     type: String 
 },
 city : {
     type: String,
    serving : Boolean
 },
 activeOrdersCount: {
    type: Number,
    default : 0,
    max : 2
 }
});
const Vehicle = mongoose.model('vehicle', vehicle);
module.exports = Vehicle;