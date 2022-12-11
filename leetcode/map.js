// let arrAny=50

// // let sum = arrA+arrAny
// // console.log(sum)
// var arrBool = arrAny.toString().split("").reverse().map(Number);
// console.log(arrBool)


// let a="hello world hello"
// let b="hello"
// //let c;
// for(let i=0;i<a.length;i++){
//   if(a[i]==b){
//  let c =a.replace(a[i],"")
//   }

// }
// //let c=a.filter(x=>typeof x==="string")
// console.log(a.length)

let a=[ 1, 2, 1, 4, 3, 4 ]
let newarr=[]
let c= a.map((a,b)=>a<b?newarr.push(a):newarr.pop(b))
console.log(newarr)