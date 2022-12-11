// // let a = [4,5,2,1,7,8]

// // let l = a.length
// // for (let i=l-1;i>=0;i--){
// //     let big = a[i-1]
// // for (let j=i-1;j>=0;j--){
// //     if(big < a[j]){
// //         big=a[j]
// //     }  else {
// //             big=-1
// //         }
// // }  a[i]=big

// // }console.log(a)

// // let arr=[1 ,2, 5 ,2, 2, 5]
// //  let arr2=[]
// // for(let i=0;i<arr.length;i++){
// //     count=0
// //     for(let j=0;j<arr.length;j++){
// //     if(arr[i]==arr[j]){
// //         count++
// //      } }arr2.push(count)
// //     }console.log(arr2)

// ///////////////////////////////////////////////////
// //     let a=[-1,4,0,-10]
// //     let k=-3
// // a.sort((a,b)=>a-b)
// // let value=[]
// // for(let i=0;i<a.length;i++){
// //     if(a[i]>=k){
// //         value.push(a[i])
// //     }
// // }console.log(value[0])

// // findbyid===return Object//
// // allBooks={
// //     _doc:{
// //         name:"farine",
// //     },
// // }
// // //find===return array//
// // age=[20]

// // //inserting key value//
// // //allBooks._doc.fage=age

// //  result=allBooks._doc
// //  result.fage=age
// // console.log(result)

// // Reverse string according to number of words
// // Given a string S containing a number of words.
// // If the count of words in the string S is even then reverse its even position’s words else reverse its odd position, push reversed words at the starting of a new string and append the remaining words as it is in order.
// // Input:
// //     Ashish Yadav Abhishek Rajput Sunil Pundir

// // let a=[ "Ashish", "Yadav", "Abhishek", "Rajput", "Sunil", "Pundir"]
// // let b=a.length
// // let badiyaArray=[]
// // if(b%2==0){

// //     for(let i=0;i<b;i++){
// //     if(i%2!=0){
// //    badiyaArray.unshift(a[i].split("").reverse().join(''))
// //    }else{
// // badiyaArray.push(a[i])
// //    }
// // }
// // console.log(badiyaArray)
// // }else{
// //      for(let i=0;i<b;i++){
// //     if(i%2==0){
// //    badiyaArray.unshift(a[i].split("").reverse().join(''))
// //    }else{
// // badiyaArray.push(a[i])
// //    }
// // }
// // console.log(badiyaArray)
// // }


// // let b = "cocodede";
// // let a = "code";
// // for (let i = 1; i < a.length; i++) {
// //     let num =b[i]
// //  for (let j = i+1; j < (b.length); j++) {
// //         num +=b[j]
// //         if(num==a){
// //             b.splice(i,a.length)
// //         console.log(b)
// //         }
// //     }
// // }
// // while(b.includes(a)){
// //     console.log("yes")
// // 


// // let arr=["H","e","l","l","o", ,"W","o","r","l","d"]

// // for(let i=0;i<arr.length;i++){
// //     for(let j=i+1;j<arr.length;j++){
// //         if(arr[i]===arr[j]){
// //             arr[i]= NaN}
// //     }
// // }
// // let newArr=arr.filter(a=>typeof a==="string")   //[ 10, 12, 19, 36, 35 ]
// // let num= newArr.join("").split("").map(Number)
// // console.log(num)//[ 1, 0, 1, 2, 1, 9, 3, 6, 3, 5 ]
// // let total=num.reduce((x,y)=>x+y)
// // console.log(total)
                     

// // let arr=["H","e","l","l","o"]
// // let count=0
// // for(let i=0;i<arr.length;i++){
// //     for(let j=i+1;j<arr.length;j++){
// //         if(arr[i]===arr[j]){
// //             count++}
            
// //     }
// // }if(count>0){
// //     console.log("deep")
// // }else{
// //     console.log("far")
// // }

    
   
// // let a=[...50]
// // let b=[]
// // for(let i=1;i<=a;i++){
// //     if(i%4==0){
// //         b.push(a[i])
// //     }
// // }console.log(b)



// // function areRotations( str1,  str2)

// //     {
// //         // There lengths must be same and str2 must be
// //         // a substring of str1 concatenated with str1. 
// //         return (str1.length == str2.length) &&
// //                ((str1 + str1).indexOf(str2) != -1);
// //     }
// //     var str1 = "ABCD";
// // var str2 = "CDAB";
// //     if (areRotations(str1, str2))
// //     console.log("Strings are rotations of each other");
// // else
// // console.log("Strings are not rotations of each other");

   


// // xyz()
// // //b()
// // console.log(c)
// // function xyz(){
// //     console.log("yes")
// // }//fun statement
// // let b=function (){
// //     console.log("no")
// // }//fun expression/declaration
// // b()
// // let c=9

// // // function(){
// // //     console.log("ano")
// // // }

// // let d=function ok(){
// //     console.log("no")
// // }//named fun expression

// // let abc=function(a,b){
// //     console.log(a+b)
// // }
// // abc(3,4)
// //  function farine(){
// //     return function xyz(){
// //      console.log("farine")
// //     }
// //  }

// //  console.log(farine)

// // let a="deep"
// // let o="farinedeep"
// // //let o=["f","a","r","i","n","e","d","e","e","p"]
// // let f =a.length
// // let d=o.length
// // let xyz=[]
// // for(let i=d-1;i>=d-f;i--){
// //      xyz.unshift(o[i])
// //     }
// //      let z=xyz.join("")
// //     if(z==a){
// //         console.log("yes")
// //     }else{
// //         console.log("no")
// //     }
// //     console.log(xyz)
// // let d = a.length
// //     let f = b.length
// //     if(b.lastIndexOf(a) == (f-d)){
// //         return "Yes"
// //     }
// //     else{
// //         return "No"
// //     }


// // let a="612313412342123"
// // let b=0
// // // if(a%6==0){
// // //     b++
// // // }
// // // let d=a.split("")
// // for(let i=1;i<a.length;i++){
// //     if(d[i]%6==0){
// //     b++
// //     }
// // }
// // while(a>0){
// //     if(a%6==0){
// //         b++
// //     }
// //     let c= Math.floor(a=a/10)
// //     if(c!=0){
// //   if(c%6==0){
// //     b++
// //   }}
// // }
// // console.log(b)

// // console.log(!+[]+!![]+!![]+!![])


// // let request={longUrl:"www.google.com"}

// //  if(/^www\.[a-z0-9-]+(?:\.[a-z0-9-]+)*\.+(\w)*/.test(request.longUrl)){
// //         request.longUrl="http://"+request.longUrl
// //       }

// // console.log(request)


// // let a=["hello","world", "hello"]
// // let b="hello"

// // for(let i=0;a.length;i++){
// //   if(a[i]==b){
// //     a[i]=NaN
// //   }
// // }
// // console.log(a)



// // let a =[3,6,4,8,9]
// // let b= a.length
// // let sum = 0
// // for (let i=0;i<b;i++){
// //   for(let j=i;j<b;j++){
  
// //    sum=sum+a[j]
    
// //     a[i]=sum-a[i]
// //   }
// // }
// // console.log(a)

// // let a="12 34 55"
// // let b ="8 12 15"
// // let c =a.split(" ").map(Number)
// // let d=b.split(" ").map(Number)
// // let x=[]
// // for (let i=0;i<c.length;i++){
// //  x.push( c[i]-d[i])
// // // }
// // // console.log( `${c.join(":")} - ${d.join(":")} = ${x.join(":")}`)
// // // console.log( c.join(":") +" - " +d.join(":")+ " = "+ x.join(":"))




// // // function
// // function greet(name) {
// //     console.log("this is call back function");
// // }
// // setTimeout(greet,1000);


// // // let a= 10 + - 10
// // // console.log(a)
// // var n=4
// // function testEven(n){
// //     if(n%2==0){
// //         return true
// //     }
// //     else return false
// // }
// // //console.log(num)
// // testEven(n)
// // //console.log(a)

// // let a= {
// //     name:"farine",
// //     age:"22",
// //     place:"mumbai"
// // }
// // let b=a
// // let {name:names}=b
// // // //update a["age"]="year"
// // // console.log(b)
// // let nums = [1,1,2]

// //     for(let i=0;i<nums.length;i++){
// //     for(let j=i+1;j<nums.length;j++){
// //      if(nums[i]==nums[j]){
// //        nums.splice(nums[j],1)
// //      }
// //     }
// //     }
// //     nums.push(_)
// //     console.log(nums)




// // let a ="Difficulty of  sentence"
// // let b = ["a","i","e","o","u"]
// // let num=0
// // for(let i=0;i<a.length;i++){
// // if(a[i] !=" "){
  
// // let c= a.indexOf(b[i])

// // console.log(c)}}

// // let a="The quick brown fox jumps"
// // let b=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// // let c=[]
// // for(let i=0;i<b.length;i++){
// // let remain=a.indexOf(b[i])
// // if(remain==-1){
// // c.push(b[i])
// // }
// // }
// // console.log(c.join(""))

// // let str = 'We promptly judged antique ivory buckles for the next prize';

// //    str = str.toLowerCase();
// //    const { length } = str;
// //    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
// //    const alphaArr = alphabets.split('');
// //    for(let i = 0; i < length; i++){
// //       const el = str[i];
// //       const index = alphaArr.indexOf(el);
// //       if(index !== -1){
// //          alphaArr.splice(index, 1);
// //       };
// //    };
// //    console.log(alphaArr.length) ;


// // let a = "CodeZingeZinger"
// // let b= "Zinger"
// // let c=""
// //  a=a.split("")
// //  let d= new Set(a)
// //  console.log(d)
// // for(let i=0;i<d.length;i++){
// //    if(d.has(b[i])){
// //     c+=b[i]}
// //   else{console.log(-1)}}
// // console.log(c.length)
// // var removeElement = function(nums, val) {

// //    for(let i = 0 ;i<nums.length;i++){
// //     if(nums[i]==val){
// //        nums.splice(i,1)
// //        i--
// //     }
  
// //    }return nums
// // };
// // console.log(removeElement([0,"1",2,"2",3,0,4,2],2))

// // let a="hakunamatta"
// // function v(val){
// //    let value = val.toLowerCase()
// //    if("a"==value||"e"==value||"i"==value||"o"==value||"u"==value )return true
// //    return false
// // }
// // let start=0
// // let str=""
// // let obj={}
// // for(let end=0 ;end<a.length;end++){

// //      if(v(a[end])==false){
// //       str+=a[end]
// //       start++
// //      }
// // }
// // console.log(str)

// // let nums1 = [0];
// // let m = 0
// // let nums2 = [1]
// // let n = 1
// //    for(let i=0;i<nums1.length;i++){
// //       // nums1.splice(m,nums1.length-1)
// //       nums1.splice(m,nums1.length)

// //   }
// // //   for(let i =0 ;i<n;i++){
// // //       nums1.push(nums2[i])
// // //   }
 
// //   console.log(nums1.sort()) 


// // let target =11;let nums =[1,2,3,4,5]
// // let sum =0;let a=0;let b=[];let i=0;let end =nums.length-1;let obj={}
// // for(let i=0;i=nums.length;i++){
// //    if(nums[i]==target){
// //       sum=nums[i]
// //        b.push(nums[i])
// //        break
// //    }
// //    if(nums[i]<=target){
// //       console.log("2")
// //       sum+=nums[i]
// //       a=Math.max(a,sum)
// //       b.push(nums[i])
// //    }
// // }      console.log(b.length)
// // console.log(sum)

// // let s = "loveleetcode";let  c = "e"
// // //Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// // function arr(s,c)
// // let n = s.length
// // let a=[]
// // {for(let i = 0 ; i<n;i++){
// //   if()
// // }}


// // let strs = ["flower","flow","flight"]
// // var longestCommonPrefix = function(strs) {
    
// //    if(strs.length==0) return ""
   
// //    for(let i=0; i<strs[0].length; i++){          //i=flower====                             
// //        for(let j=1; j<strs.length;j++){          //
// //            if(strs[0][i]!=strs[j][i]){           //1st[i=0]=>(f) = [j=1](f) =[j=2] (f) false   
// //                return strs[0].slice(0,i)         //2nd[i=1]=>(l) = [j=1](l) =[j=2] (l) false
// //            }}}                                   //3rd[i=2]=>(0) = [j=1](0) !=[j=2] (i) true    
// //      return strs[0]                              //returing the previous matched value as it dosent match the current 
// //                                                  //slice(index from where to start , and length where to end ) 
// //    };
// //    console.log(longestCommonPrefix(strs))
// // //console.log(strs[0].slice(0,2))

// // let nums1 = [1,2,2,1];let nums2 = [2,2]
// // var intersection = function(nums1, nums2) {
// // let b={}
// // for(let i=0;i<nums1.length;i++){
// //    for(let j=0;j<nums2.length;j++){
// //        if(nums1[i]==nums2[j]){
// //          b[nums1[i]]=(b[nums1[i]]||0)+1
// //        }}}
// //     return Object.keys(b)
// // };
// // console.log(intersection(nums1,nums2))

// // let digits =
// // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// // var plusOne = function(digits) {
// //   let a= BigInt(digits.join(""))+1n
// //   console.log(a)
   
// //     return (a.toString().split("").map(Number))
// // };
// // console.log(plusOne(digits))






// var sortColors = function(nums) {
//     for(let i=1;i<nums.length;i++){   // 1st=>i=1
//     let curr = nums[i]                // curr=0
//     let j = i-1;                      // i-1=0
//     while(j>=0 && curr<nums[j]){      //0>=0 && 0<2
//         nums[j+1]=nums[j];            // 0=2                            
//         j--                           
//     }
    
//     nums[j+1] = curr;
// }
// return nums
// };
// console.log(sortColors([2,0,2,1,1,0]))




let arr=[4,2,-3,1,6]
let t=0
var subarraySum = function(nums, k) {
    let map = new Map();
	map.set(0, 1);
    
    let sum = 0;
    let count = 0;
    
    for(let num of nums) {
        sum += num;
        
        if(map[sum - k]) {
            count += map[sum - k];
        } 
        map[sum] = (map[sum] || 0) + 1;
    }
    return count;
};
console.log(subarraySum(arr,t))



// for (let i=0;i<arr.length;i++){
//     if(!map[arr[i]]){
//     map[arr[i]]=(i)}
// }
// for(let [k,v] of Object.entries(map)){
//     sum+=k.map(Number)
//     console.log(sum)
// }
// console.log(map)