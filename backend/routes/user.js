const {Router} = require('express');
const { User, Cancle } = require('../db');
const jwt = require('jsonwebtoken');
const usermiddleware = require('../middlewares/user');
const router = Router();


router.get('/signin', async(req, res)=>{

    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({
            username,
            password
        })
        if(user.length != 0){
            const token = jwt.sign({username} , "my_secret");
            res.json({
                token : token
            })
        }
        else{
            res.json({
                msg : "No user found"
            })
        }
    } catch (error) {
        console.error(error)
    }
    
    
})

router.post('/cancle', usermiddleware, async(req, res)=>{

    try {
        const body = req.body;

        await Cancle.create({
            ticketData : {
                passangerName: body.ticketData.passangerName,
                flightName : body.ticketData.flightName,
                flightNo : body.ticketData.flightNo,
                date :   body.ticketData.date
            },
            reasonForExit : body.reasonForExit,
            csifOfficerName : body.csifOfficerName,
            csifOfficerId : body.csifOfficerId,
            airlineStaffName : body.airlineStaffId,
            airlineStaffId : body.airlineStaffId
        })
        res.json({
            msg : "Details submiited"
        })
    } catch (error) {
        console.error(error)
    }
    
})


module.exports = router;