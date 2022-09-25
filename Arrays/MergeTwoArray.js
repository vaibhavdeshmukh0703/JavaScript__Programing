// Merge Two Arrays Using Javascript destructuring concept.

let a = [1,2,3,4,5];
let b = [6,7,8,9];
console.log(...a,...b);

// Answer :
// vaibhav@vaibhav-Inspiron-3542:~/JavaScript__Programing/Arrays$ node MergeTwoArray.js 
//1 2 3 4 5 6 7 8 9

let c = [...a,...b];
console.log(c);

//Answer : 
// vaibhav@vaibhav-Inspiron-3542:~/JavaScript__Programing/Arrays$ node MergeTwoArray.js 
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ] 

// Merge B array element into A array; 
// Array Element Before Merge.
console.log(" Array Element Before Merge.")
console.log('a =',a);
console.log('b =',b);

a = [...a,...b];

// Array Element After Merge
console.log(" Array Element After Merge.")
console.log('a =',a);
console.log('b =',b);

// vaibhav@vaibhav-Inspiron-3542:~/JavaScript__Programing/Arrays$ node MergeTwoArray.js 

// Array Element Before Merge.
// a = [ 1, 2, 3, 4, 5 ]
// b = [ 6, 7, 8, 9 ]

// Array Element After Merge.
// a = [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
// b = [ 6, 7, 8, 9 ]

// Merge Array 'a' into array 'b'

// Merge B array element into A array; 
// Array Element Before Merge.
console.log(" Array Element Before Merge.")
console.log('a =',a);
console.log('b =',b);

b = [...b,...a];

// Array Element After Merge
console.log(" Array Element After Merge.")
console.log('a =',a);
console.log('b =',b);

// Answer : 
//  Array Element Before Merge.
// a = [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
// b = [ 6, 7, 8, 9 ]
//  Array Element After Merge.
// a = [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
// b = [
//   6, 7, 8, 9, 1, 2,
//   3, 4, 5, 6, 7, 8,9]
