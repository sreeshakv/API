const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemschema = new Schema ({
 name: {
     type : String 
 },
 price :{
     type: Number 
 }
});
const Item = mongoose.model('item', itemschema);
module.exports = Item;