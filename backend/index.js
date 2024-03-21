const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser =  require('body-parser');
const userRouter = require('./routes/user');
app.use(bodyparser.json());

app.use('/user', userRouter)

app.listen(3000 , ()=>{
    console.log("Port is running");
})