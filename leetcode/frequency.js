//  let a="hello world"
//  a=a.split("")
//  let map={}
//  for(let i of a){
//   if(i!=0)
//   {  i= i.charCodeAt(0)- "a".charCodeAt(0)
//      map[i]=(map[i] || 0)+1}

//  }

// console.log(map)

// let a=[1,2,3,1]
// let b=[]
// let map={}
//   for(let i=0;i<a.length;i++){  
//     if(map[a[i]]){
//         map[a[i]]++
//     }else{
//         map[a[i]]=1
//     } }
//     let k = Object.keys(map)
//     for(let i in a){
//      if(a[i]==k[i]){
//         b.push(i) }}
//  console.log(map)
//  console.log(b)

 
//sieve of eratosthenes

let a= "aacc"
let b= "caac"
function anagram(a,b){
    let obj={}

for (let i of a){
  obj[i]=(obj[i]||0)+1
}

for(let i of b){

if(!obj[i]) return false
else{obj[i]-=1}
}
return true
}
console.log(anagram(a,b))