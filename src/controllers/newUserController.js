const model=require("../models/newUserModel")
  //------------------user detail-------------------//
const createUser= async function(req,res){
    let enteredData=req.body
    let savedData=await model.create(enteredData)
    res.send({UserData:savedData})
}

//-------------------login and genetrating token-------------------//
const login =async function (req,res){
    let userEmail= req.body.emailId
    let userPassword =req.body.password
    let logIn =await model.findOne({emailId:userEmail,password:userPassword})
    if(!logIn){
        return res.send({Oops:"!!incorrect password or emailId!!"})
    }
}
module.exports={createUser}