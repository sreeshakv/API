const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const order = new Schema ({
    orderNumber: {
        type : Number 
    },
    itemID:{
        type: String
    },
    price :{
        type:Number
    },
    customerID:{
        type:String
    },
    deliveryVehicleId :{
        type:String
    },
    isDelivered:{
        type:Boolean,
        default : false
    }
   });
   const Order = mongoose.model('order', order);
   module.exports = Order;