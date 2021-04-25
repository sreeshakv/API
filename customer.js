const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const custschema = new Schema ({
    name: {
        type : String 
    },
    city :{
        type: String
    }
   });
   const Cust = mongoose.model('cust', custschema);
   module.exports = Cust;