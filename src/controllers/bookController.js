const bookmodel= require("../models/bookmodel")

// const createBook= async function (req, res) {
//     let data= req.body
//     let savedData= await bookmodel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allUsers= await bookmodel.find()
//     res.send({msg: allUsers})
//     console.log(allUsers)
// }


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel.create(data)
    res.send({msg: savedData})

}


const bookList= async function (req, res) {
    let list= await bookmodel.find().select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: list})
}
const getRandomBooks= async function (req, res) {
    let rdBk= await bookmodel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg: rdBk})
}
const getBooksInYear= async function (req, res) {
    let years= req.body.year
    let yearData= await bookmodel.find({year:years})
    res.send({msg: yearData})
}

const getXINRBooks= async function (req, res) {
    let inrData= await bookmodel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg: inrData})
}
const getParticularBooks= async function (req, res) {
    let pb =req.body
    let pBk= await bookmodel.find(pb)
    res.send({msg: pBk})
}



module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData