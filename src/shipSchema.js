const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017", {useUnifiedTopology:true,
useNewUrlParser: true});

const orderschema = new mongoose.Schema({
    email: String,
    receiver: {
        firstName: String,
        middleName: String,
        lastName: String
    },
    address: {
        houseNo: String,
        areaName: String,
        cityName: String,
        pinCode: String,
        state: String,
        country: String
    },
    contact: {
        contactNo: String,
        alternateNo: String
    },
    deliveryTime: [String] 
});

const orderDetails = mongoose.model('OrderDetail', orderschema);

module.exports = orderDetails;