const express = require('express');
const User = require('./loginSchema.js');

const Router = express.Router();

function requireAuth(req, res, next) {
    if (req.session.user && req.session.user.isLoggedIn) {
        next(); 
    } else {
        res.redirect('/login');
    }
}

Router.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/login.html");
});

Router.post("/process-login", async (req, res) => {
    const data = req.body; 
    const email = data.email;
    const password = data.password;

    try {
        const query = { email: email, password: password };
        const user = await User.findOne(query);
        // console.log(user)

        if (!(user == null)) {
            req.session.user = {
                username: email, 
                isLoggedIn: true
            };
            res.redirect('/logged-in');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error("Error logging in: ", error);
        res.redirect('/login');
    }
    
});

Router.get("/signup", (req, res) => {
    res.status(200).sendFile(__dirname + "/signup.html");
});

Router.post("/process-signup", async (req, res) => {
    const data = req.body;
    const firstName = data.firstname;
    const lastName = data.lastname;
    const email = data.email;
    const dob = data.dob;
    const gender = data.gender;
    const password = data.password;

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        dob: dob,
        gender: gender
    });

    await newUser.save();

    res.redirect('/login');
});

Router.get("/forgot-password", (req, res) => {
    res.status(200).sendFile(__dirname + "/forgot-password.html");
});

Router.post("/process-forgot-password", (req, res) => {
    res.status(200).redirect("/login");
});

Router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Error logging out');
        }
        res.redirect('/logged-in');
    });
});


module.exports = Router;