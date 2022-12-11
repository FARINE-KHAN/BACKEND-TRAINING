// ============================2.add two numbers=====================//
  //not done linked list
// l1 = [2,4,3], l2 = [5,6,4]


// var addTwoNumbers = function(l1, l2) {
// let num1=""
// let num2=""
//  for(let i = l1.length-1;i>=0;i--){
//     num1+=l1[i]
//  }
//  for(let i = l2.length-1;i>=0;i--){
//     num2+=l2[i]
//  }
//  num1=parseInt(num1)
//  num2=parseInt(num2)
//  let sum = num1+num2
// let sumS=sum.toString().split("")
// let ans=""
// for(let i=sumS.length-1;i>=0;i--){
//     ans+=sumS[i]
// }
// return ans

// };
// console.log(addTwoNumbers(l1,l2))


//==========================412. Fizz Buzz===========================//

let n=5
// let done = function(n){
// for (let i = 1; i<=n; i++){
//     if(i%3==0 && i%5==0){
//        i="fizzbuzz"
//     }
// }}
// console.log(done(n))
var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => 
    (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};
console.log(fizzBuzz(n))