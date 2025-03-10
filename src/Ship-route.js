const express = require('express');
const User = require('./loginSchema.js');
const shipDetails = require('./shipSchema.js');
const mongoose = require('mongoose');

function requireAuth(req, res, next) {
    if (req.session.user && req.session.user.isLoggedIn) {
        next(); 
    } else {
        res.redirect('/login');
    }
}

const Router = express.Router();

Router.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + '/ship.html');
});

Router.post("/process-ship", requireAuth, async (req, res) => {

    const {_Fname, _Mname, _Lname, _Hno, _area, _city, _pin, _State, country, _num, _alt, _time1} = req.body;
    const newOrder = new shipDetails({
        email: req.session.user.username,
        receiver: {
            firstName: _Fname,
            middleName: _Mname,
            lastName: _Lname
        },
        address: {
            houseNo: _Hno,
            areaName: _area,
            cityName: _city,
            pinCode: _pin,
            state: _State,
            country: country
        },
        contact: {
            contactNo: _num,
            alternateNo: _alt
        },
        deliveryTime: _time1
    });
    // console.log(newOrder)
    await newOrder.save();

    res.redirect('/logged-in');
});

module.exports = Router;