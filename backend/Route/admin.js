const express = require('express');
const { Admin, Event , Special } = require('../Db/schema');
const jwt = require('jsonwebtoken');
const { SECRETE } = require('../config');
const validateAdminToken = require('../Middleware/Admin');
const router = express.Router() ;

/*
    Login 
    Register 
    addEvents
    getMyEvents
*/


router.post('/register', async (req, res) => {

    Admin.findOne({ username: req.body.username }).then((res1) => {
        if (res1 == null) {

            Admin.create({ username: req.body.username, password: req.body.password, fname: req.body.fname, lname: req.body.lname }).then((res2) => {
                let token = jwt.sign({ username: res2.username , isAdmin : true  }, SECRETE)
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


router.post('/login' , async (req , res )=>{
    Admin.findOne({username : req.body.username}).then((res1) => {
        if (res1 != null)
        {
            if (res1.password == req.body.password)
            {
                let token = jwt.sign({username : res1.username , isAdmin : true} , SECRETE)
                return res.status(200).json({
                    msg : "Login Success" , 
                    token
                })
            }
            else 
            {
                return res.status(400).json({
                    msg : "Password Not Match" , 
                })
            }
        }
        else 
        {
            return res.status(400).json({
                msg : "Account Not Found " , 
            })
        }
    }).catch((err1) => {
        res.status(400).json({
            msg : "Somrthing went wrong !"
        })
    })
}) 
router.get('/getEvents' , validateAdminToken , async(req ,res) => {

    Admin.findOne({ username: req.username }).then(async (response) => {
        console.log(await response);
        let events = await Event.find({
            _id: {
                $in: response.events
            }
        })
       return res.status(200).json({
            events: events
        })
    }).catch((error) => {
        res.status(400).json({
            msg : "Something went wrong !"
        })
    })
})



router.post('/addEvent' , validateAdminToken , async (req ,res )=>{

        Event.create({
            ename : req.body.ename  , 
            edesc : req.body.edesc  , 
            ehost : req.body.ehost , 
            edate : req.body.edate , 
            eduration : req.body.eduration , 
            eprice  : req.body.eprice
        }).then (async (res1) => {
            let query = await Admin.updateOne({ username: req.username }, {
                $push: {
                    events: res1._id
                }
            })
            if (query.acknowledged) {
                if (res1 != null) {
                    res.status(200).json({
                        msg: "Project Added Succesfully",
                    })
                }
            }
            else 
            {
                res.status(400).json({
                    msg: "Something went wrong ! Event Creation Failed",
                })
            }
        }) 
})



module.exports = router