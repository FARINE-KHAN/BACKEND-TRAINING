// let nums = [2,7,11,15]
// let target = 9

// var twoSum = function(nums, target) {
//     let arr=[]
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
           
//             if((nums[i]+nums[j])==target){
//                 arr.push(i,j)
//             }
//         }
//     }console.log(arr) 
// };
// twoSum([2,7,11,15],9)



// let l1 = [2,4,3]//
// let l2 = [5,6,4]

// //l1.join("")
// // let a=l1.reverse().join("")
// // let b=parseInt(a)
// // console.log(b)

// var addTwoNumbers = function(l1, l2) {
//     let c=l1.reverse().join("")
//     let a=parseInt(c)
//     let d=l2.reverse().join("")
//     let b=parseInt(d)

//     let sum=a+b
//     sum=sum.toString().split("").reverse().map(Number)
    
// console.log(sum)
// };
// addTwoNumbers([2,4,3],[5,6,4])
//output==[7,0,8]


// var addTwoNumbers = function(l1, l2) {
    
//     let sum = 0;
//     let current = new ListNode(0);
//     let result = current;
    
//     while(l1 || l2) {
        
//         if(l1) {
//             sum += l1.val;
//             l1 = l1.next;
//         }
        
//         if(l2) {
//             sum += l2.val;
//             l2 = l2.next;
//         }
        
//         current.next = new ListNode(sum % 10);
//         current = current.next;
        
//         sum = sum > 9 ? 1 : 0;
//     }
    
//     if(sum) {
//         current.next = new ListNode(sum);
//     }
    
//     return result.next;
// };

// addTwoNumbers([2,4,3],[5,6,4])


