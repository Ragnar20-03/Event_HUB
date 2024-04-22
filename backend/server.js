const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const userRouter = require('./Route/user')
const adminRouter = require('./Route/admin')
const app = express () ; 

app.use(bodyParser.json());
app.use(cors() );
app.use('/user' , userRouter)
app.use('/admin' , adminRouter)


app.get('/' , (req ,res) => {
    res.send("Event Hub")
})

app.listen(5100 , () => {
    console.log("Server started on Port Number 5100 ");
})