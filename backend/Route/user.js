const express = require('express');


const router = express.Router();
const { User, Event, Special } = require('../Db/schema');

const jwt = require('jsonwebtoken');
const { SECRETE } = require('../config');
const validateToken = require('../Middleware/user');
/*
    Login 
    Register 
    getEvents
*/


router.post('/register', async (req, res) => {

    User.findOne({ username: req.body.username }).then((res1) => {
        if (res1 == null) {

            User.create({ username: req.body.username, password: req.body.password, fname: req.body.fname, lname: req.body.lname }).then((res2) => {
                let token = jwt.sign({ username: res2.username , isAdmin : false }, SECRETE)
                return res.status(200).json({
                    msg: "Registreation Succesfull ! ",
                    token
                })
            }).catch((err2) => {
                return res.status(400).json({
                    msg: "Something went Wrong !",
                })
            })
        }
        else {
            return res.status(400).json({
                msg: "Already Registerd with this username !"
            })
        }

    })
})


router.post('/login', async (req, res) => {
    User.findOne({ username: req.body.username }).then((res1) => {
        if (res1 == null) {
            return res.status(404).json({
                msg: "Account not found"
            })
        }
        else {
            if (res1.password != req.body.password) {
                return res.status(400).json({
                    msg: "Password Not Matched !"
                })
            }
            else {
                let token = jwt.sign({ username: res1.username , isAdmin : false }, SECRETE)
                return res.status(200).json({
                    msg: "Login Success !",
                    token 
                })
            }
        }
    })
})

router.get('/getEvents'  ,   async (req, res) => {
    Event.find({}).then((res1) => {
        return res.status(200).json({
            events: res1
        })
    }).catch((err1) => {
        return res.status(400).json({
            msg: "Something went wrong"
        })
    })
})

// router.get('/special' , validateToken ,   async (req, res) => {
//     Special.find({}).then((res1) => {
//         return res.status(200).json({
//             events: res1
//         })
//     }).catch((err1) => {
//         return res.status(400).json({
//             msg: "Something went wrong"
//         })
//     })
// })

router.get('/', (req, res) => {
    res.send("Hello from user route")
})


module.exports = router