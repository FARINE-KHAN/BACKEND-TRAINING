// // let a=[1,2,2,2,2]

// // for(let i =0 ;i<a.length;i++){
// //     if(a[i]==a[i+1]){
// //         a.splice(a[i+1],1) }
// // }
// // console.log(a)
// // var removeDuplicates = function(nums) {
// //     for(let i =0 ;i<nums.length;i++){
// //     if(nums[i]==nums[i+1]){
// //         nums.splice([i],1) 
// //         i--}
// // }return nums
// // };
// // let x=removeDuplicates(a)
// // console.log(x)

// // let obj ={}
// // for(let i of a){
// // obj[i]=obj[i]+1
// // }
// // let v=Object.keys(obj)
// // console.log(v.map(Number))


// // var mergeTwoLists = function(list1, list2) {
// //     let arr =[]
// //      if(list1.length==0 && list2.length==0)return list1
// //       if(list1.length>list2.length || list1.length==list2.length){
// //         for(let i=0 ; i<list1.length;i++){
// //             arr.push(list1[i])
// //         }
// //       }
// //       if(list1.length<list2.length || list1.length==list2.length){
// //         for(let i=0 ; i<list2.length;i++){
// //             arr.push(list2[i])
// //         }
// //       }
//     function bubbleSort(array,n) {
//         var done = false;
//         while (!done) {
//           done = true;
//           for (var i = 1; i < n; i += 1) {
//             if (array[i - 1] > array[i]) {
//               done = false;
//               var tmp = array[i - 1];
//               array[i - 1] = array[i];
//               array[i] = tmp;
//             }}
//         return array;
//           }
//     return(bubbleSort(array,n-1))
//     };
// console.log(bubbleSort([2,3,1],3))
// //    let c= mergeTwoLists([],[])
// //    console.log(c)


// // let c= "()[]{}"
// // let a=c.split("")
 
// // for (let i=0;i<a.length;i++){
// //   if(a[i]==a[i+1]){
// //     console.log(true)
// //   }else console.log(false)
// // }

// // ## 58. Length of Last Word

// // let a = "   fly me   to   the moon  "
// // a=s.split(" ")
// // let c=[]
// // for(let i=0;i<s.length;i++){
// // if(s[i]!="")
// // {  c.push(s[i])
// //  }}
// //  let b=c.pop()
// //  console.log()

// // ===========================100. Same Tree==================//


// // let a=[1,2,3,4,5,6,7,8,9]
// // let b=[]

// // for(let i =0 ;i<4;i++){
// //     let c=a[i]+a[i+1]
// //     console.log(c)
// // }

let nums=[4,3,2,7,8,2,3,1]
var findDuplicates = function(nums) {
  let map ={}
  for(let i of nums){
      map[i]=(map[i]||0)+1
  }
   let a=Object.keys(map).filter(i=>map[i]!=1)
   return (a.map(Number))
};
console.log(findDuplicates(nums))