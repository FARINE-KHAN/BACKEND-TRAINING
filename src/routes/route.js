const express = require('express');
// const abc = require('../introduction/intro')
const a= require('../logger/logger')
const b=require('../util/helper')
const c=require('../validator/formatter')
const router = express.Router();



router.get('/test-me', function (req, res) {
    res.send('Welcome to my application. I am  FARINE KHAN and a part of FunctionUp Plutonium cohort')
    a.welcome()
    b.date()
    b.month()
    b.batchInfo()
    c.trim()
    c.lower()
    c.upper()


});

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason