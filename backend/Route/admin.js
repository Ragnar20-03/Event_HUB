const express = require('express');

const router = express.Router() ;

/*
    Login 
    Register 
    addEvents
    getMyEvents
*/

router.get('/' , (req ,res) => {
    res.send ("Hello from Admin route")
})


module.exports = router