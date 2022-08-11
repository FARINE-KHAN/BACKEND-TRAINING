const express = require('express');
const router = express.Router();



let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
       {
        "bookingNumber": 1,
         "sportId": "",
         "centerId": "",
        "type": "private",
        "slot":' 16286598000000',
        "bookedOn": '31/08/2021',
        "bookedFor": '01/09/2021'
       }
   ]

  
   


   router.post('/players', function (req, res) {
    let abc=req.body
    for(let i in players){
        if(players[i].name==abc.name){
            res.send("the data of a player with a name that already exists in the data")
        }
    } 

    players.push(abc)
     res.send(  { data: players , status: true }  )
    //LOGIC WILL COME HERE
   
})



let person =[
    {
        name:"Farine khan",
        age:22,
        votingStatus :false

    },
    {
        name:"Nida khan",
        age:12,
        votingStatus :false

    },
    {
        name:"Ibrahim khan",
        age:24,
        votingStatus :false

    },
    {
        name:"Naba khan",
        age:14,
        votingStatus :false

    },
    {
        name:"Parvez khan",
        age:52,
        votingStatus :false

    },
    {
        name:"Arsalan khan",
        age:18,
        votingStatus :false

    },
]


router.post('/person', function (req, res) {
   let votingAge=req.body
   let eligibleVoters=[]
       for (i=0;i<person.length;i++){
       if (person[i].age>votingAge.age){
       person[i].votingStatus= true
       eligibleVoters.push(person[i])
     }
  }
   res.send({eligibleVoters})
})

// router.post('/person', function (req, res) {
//     let votingAge=req.body
//     let eligibleVoters=person.filter(x=>x.age>votingAge.age)
//     .map()
 
        
    
   
//     res.send({eligibleVoters})
 
//  })
 










router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    let name =req.body.name
    arr.push(name)
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


module.exports = router;