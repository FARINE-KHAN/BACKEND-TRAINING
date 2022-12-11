//--------(1)--------//
// let a=[];
// let b=[];
// console.log(a==b)//=>false
// console.warn(a===b)//=>false
/*(here their(array's)memeory location is checked)*/

//-------(2)--------//
// let a=[];
// let b=a;
// console.log(a==b)//=>true
// console.log(a===b)//=>true
/*(here their(array's)memeory location is checked===same memory location)*/

//-------(3)--------//
// let a=[20];
// let b=["20"];
// console.log(a[0]==b[0])//=>true
// console.log(a[0]===b[0])//=>true//=>false when element is in string
/*(array's specified element is getting checked)*/

//-------(4)--------//
// let a=[1,2,3,4];
// console.warn(...a);
// console.log(...a);


var arr = [1, 2, 3, 4, 5];

for (var i = arr.length -1; i >= 0; i--) {
	arr.push(arr[i]);
}
console.log(arr)
