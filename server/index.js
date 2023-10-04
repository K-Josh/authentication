// jshint eversion:6
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const User = require('./models/User');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const myEnv = dotenv.config({silent: true});  

const UserModel = require('./models/User');


mongoose.connect("mongodb://127.0.0.1:27017/MernChat", {useNewUrlParser: true});
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render('home')
});



app.post('/login', (req, res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then((users) => {
        if(users) {
            if(users.password===password){
                res.render('home')
            } else {
                res.send('<h3>invalid username and Password</h3>')
            }
        } else {
            res.render('error', 'register')
        }
    })
})

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json('users'))
    .catch(err => res.json(err))
})

// app.post('/register', async (req, res) => {
//     // so we want to create a new user with the data from the req
//     const {username,password} = req.body;
//     if (!username || !password) {
//         return res.status(400).json({
//           message: "Username or Password not present",
//         })
//       }
//    try {
//     const createdUser = await User.create({username, password});
//     jwt.sign({userId:createdUser._id}, jwtSecret, {}, (err, token) => {
//         if (err) throw err;
//         res.cookie('token', token).status(201).json('ok');
//     });
//    } catch(err) {
//     if (err) throw err;
//     res.status(500).json('error');
//    }
// });
// 
app.listen(3000, function(){
    console.log("app is running");
});

// https://youtu.be/ZVyIIyZJutM?si=q9-4QFxuBnX8kKvB