const authorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const findBook= async function (req, res){
    let daata= await authorModel.find({author_name:"Chetan Bhagat"})
    let result= await bookModel.find({author_id:{$eq:daata[0].author_id}})
    res.send({msg:result})
}

const findAuthor= async function (req, res){
    let data= await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let result= await authorModel.find({author_id:{$eq:data.author_id}})
    res.send({msg:result})
}

const money= async function (req,res){
    let data= await bookModel.find( { price : { $gte: 50, $lte: 100} } )
    let a=data.map(x=>x.author_id)
    let result= await authorModel.find({author_id:a}).select({author_name:1,_id:0})
    res.send({msg:result})
}
module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.findBook=findBook
module.exports.findAuthor=findAuthor
module.exports.money=money
