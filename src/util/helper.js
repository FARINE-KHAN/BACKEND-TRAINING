let dates =new Date();
function dates(){
    console.log("today's date ="dates.getDate())
}
function month(){
    console.log("and month ="dates.getMonth()+1)
}
function batchInfo(){
    console.log(" PLUTONIUM, W3D5, the topic for today is Nodejs module system")
}

module.exports.date=dates
module.exports.month=month
module.exports.batchInfo=batchInfo
