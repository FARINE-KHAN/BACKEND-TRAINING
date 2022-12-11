let list1=[1,2,4]
let list2=[1,3,4]
let l=[]
for (let j = 0 ; j<list2.length; j++){
    l.push(list2[j])
}
for (let f = 0 ; f<list1.length; f++){
    l.push(list1[f])
}
function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
console.log(bubbleSort(l))