const model = require("../models/newUserModel")
const jwt = require("jsonwebtoken")
//------------------user detail-------------------//

const createUser = async function (req, res) {
    try{
    let enteredData = req.body
    let savedData = await model.create(enteredData)
    res.status(201).send({ UserData: savedData })
}catch(error){res.status(400).send({err:error.message})}}

//-------------------login and genetrating token-------------------//

const login = async function (req, res) {
    try{
    let user = req.body
    let logIn = await model.findOne({ emailId: user.emailId, password: user.password })
    if (!logIn) {
        return res.status(400).send ({Oops: "!!incorrect password or emailId!!" })
    }
    let token = jwt.sign(
        {
            userId: logIn._id.toString(),
            batch: "plutonium",
        },
        "HAKUNAMATATA-NO-WORRIES;)"
    );
    res.status(201).send({ status: true, token: token });
}
catch(error){res.status(401).send({err:error.message})}

}
//---------------------------------validation---------------------------------------//

const validate = async function (req, res) {
    try{
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "HAKUNAMATATA-NO-WORRIES;)");
    if (!decodedToken) { return res.status(401).send({ err: "token is invalid" }) }
    let userId = req.params.userId;
    let userDetails = await model.findById(userId);
    res.status(200).send({ data: [userDetails,decodedToken ]});
}catch(error){res.status(500).send(error.message)}}
// -------------------------------attribute updation----------------------------------------//

let updation = async function (req, res) {
    try{
    let abc = req.params.userId
    let userData = req.body;
    let updated = await model.findOneAndUpdate({ _id: abc },userData)
    res.status(205).send({ "successfully updated": updated })
}catch(error){res.status(400).send({err:error.message})}
}
//-----------------------------------deletion---------------------------------------//
 
let deletion = async function (req, res) {
    try{
    let xyz = req.params.userId
    let userData = req.body;
    let deleted = await model.findOneAndUpdate({ _id: xyz },userData)
    res.status(205).send({data:deleted})
}catch(error){res.status(400).send({err:error.message})}
}

module.exports = { createUser, login, validate, updation, deletion }