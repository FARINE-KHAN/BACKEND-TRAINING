const express = require('express');
const lodash = require('lodash');
// const abc = require('../introduction/intro')
// const a= require('../logger/logger')
// const b=require('../util/helper')
// const c=require('../validator/formatter')
const router = express.Router();



router.get('/test-me', function (req, res) {
    res.send('hii,i am farine khan')
    // no.1
    const mon=["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
    console.log(lodash.chunk(mon, 3))

    // no.2

    const od=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(od));

    //no.3

    const arr=[1,2,3,4,5]
    console.log(lodash.union(arr,[2,6]));

    //no.4

    const obj =[ ["horror","The Shining"],["drama",'Titanic'],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(obj));




    // a.welcome()
    // b.date()
    // b.month()
    // b.batchInfo()
    // c.trim()
    // c.lower()
    // c.upper()


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