const express  = require('express');
const app = express();
const bodyParcer = ('body-parser');
const mongoose = require('mongoose');
app.use(express.json());
const router = express.Router();
const Items = require('./items');
const Cust = require('./customer');
const Vehicle = require('./vehicles');
const Order = require('./order');

mongoose.connect('mongodb://localhost:27017/items');
mongoose.connect('mongodb://localhost:27017/customers');
mongoose.connect('mongodb://localhost:27017/vehicles');
mongoose.connect('mongodb://localhost:27017/order');

mongoose.connect('mongodb://localhost:27017', (error) => {
    if(!error)
    {
        console.log('okay');
    } else {
        console.log('error');
    }
});

app.post('/items', (req, res) => {	//creating data
   const item = {
    price: req.body.price,
    name: req.body.name
};
 items.push(item);
 res.send(item);
});
app.get('/', (req, res) => {	//getting all data of items
  res.send(items);
});
app.get('/item/:id', (req, res) => {  //getting specified single data/item
 const theitem = items.find(c => parseInt(req.params.id ) );
 if (!theitem || theitem>2) {
     res.send('no item');
 } else {
     res.send(theitem); 
 }
});
app.put('/item/:id', (req, res) => {	//update data
  const theitem = item.find(c => parseInt(req.params.id)); // check 
  if (!theitem || theitem>2) {
    res.send('no item');
    return; 
  } 
    if(!req.body || req.body.length < 2) {   // validation
        res.send('enter correct input')
        return;
    }
    const item = {
       price : req.body.price,
      name: req.body.name
    };
    item.push(items);
 res.send(items);
  activeOrderCounts =activeOrderCounts +1;  
});
app.post('/vehicles', (req, res) => {	//creating data
  const vehicle = {
    registrationNumber: req.body.registrationNumber,
   vehicleType: req.body.vehicleType,
   city: req.body.city,
   activeOrderCounts : req.body.activeOrderCounts
};
items.push(vehicle);
res.send(vehicle);
});
app.get('/vehicle/:id', (req, res) => {  //getting specified single data/vehicle
    res.send(thevehicle); 
});
app.put('/vehicle/:id', (req, res) => {	//update data
  const item = {
    registrationNumber: req.body.registrationNumber,
    vehicleType: req.body.vehicleType,
    city: req.body.city,
    activeOrderCounts : req.body.activeOrderCounts
 };
if (req.body.city!= city) { //busneiss logic
console.log("order cannot be placed outside city");
}
if (activeOrderCounts>2||serving==true) {
  console.log("order cannot place");
} else {vehicles.push(vehicle); 
res.send(vehicle);  
}});
app.post('/order', (req, res) => {	//creating order
  console.log('order as items in house');
  const order = {
   orderNumber: req.body.orderNumber,
   itemID: req.body.itemID,
   price: req.body.price,
   customerID: req.body.customerID,
   deliveryID : req.body.deliveryID,
   isdelivered:  req.body.isdelivered
};
items.push(order);
res.send(order);
});
app.put('/order/:id', (req, res) => { //updating order if delivered
  console.log('enter true if delivered or false if not');
  const order ={
  isDelivered:  req.body.isDelivered
  }
  order.push(order);
  res.send(order);
});

app.listen(process.env.port||3000, () => console.log('listening on the port 3000'));
