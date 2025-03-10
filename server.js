const express = require('express');
const bodyParser = require('body-parser');
const Login = require('./src/Login-route');
const mongoose = require('mongoose');
const session = require('express-session');
const shipRoute = require('./src/Ship-route');
const shipDetails = require('./src/shipSchema.js');

const app = express();
const PORT = 3000;


app.use(session({
    secret: '1ASD234',
    resave: false,
    saveUninitialized: false
}));

function requireAuth(req, res, next) {
    if (req.session.user && req.session.user.isLoggedIn) {
        next(); 
    } else {
        res.redirect('/login');
    }
}

mongoose.connect("mongodb://localhost:27017", {useUnifiedTopology:true,
useNewUrlParser: true});

app.use(express.static('resource'));
app.use(express.static('src'));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set('strictQuery', true);

app.get("/", (req, res) => {    
    res.status(200).sendFile(__dirname + "/src/index.html");
});

app.get("/logged-in", requireAuth, (req, res) => {
    res.status(200).sendFile(__dirname + '/src/logged-in.html');
});

app.get("/track", (req, res) => {
    res.status(200).sendFile(__dirname + '/src/track.html');
});

app.use("/login", Login);

app.use("/ship", shipRoute);

app.get("/get-details", requireAuth, async (req, res) => {
    try {
        const userId = req.session.user.username;
        const orders = await shipDetails.find({ email: userId });
        res.send(JSON.stringify(orders));
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post("/contact", requireAuth, (req, res) => {
    if (req.session.user && req.session.user.isLoggedIn) {
        res.redirect('/logged-in');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});