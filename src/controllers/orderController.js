const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const createOrder = async function (req, res) {
    let order = req.body
    req.body.date=new Date().toLocaleDateString()
    let a = await userModel.findById(order.userId)
    let b = await productModel.findById(order.productId)
    let Total = b.price 
    let deduct = a.balance - Total
    if(!order.userId){ return res.send("UserId is mandatory")}
    else if (!a) { return res.send("invalid userId") }
    else if(!order.productId){ return res.send("ProductId is mandatory")}
    else if (!b) { return res.send("invalid productId") }
    if (a.isFreeAppUser === false){
        req.body["amount"] = Total
        if (order.amount <= a.balance){
            let balUpdate = await userModel.findOneAndUpdate({ _id:order.userId},{$set:{balance:deduct}},{new:true})
            let orderCreated = await orderModel.create(order)
            return res.send({data:[orderCreated,balUpdate]})
        } else if(order.amount > a.balance){res.send({ oops: "Customer has In-Sufficient Balance" })}
    }else{let orderCreated = await orderModel.create(order)
            return res.send({ data: orderCreated})}
}
module.exports.createOrder = createOrder