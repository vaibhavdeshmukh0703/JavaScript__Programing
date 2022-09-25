// Equality operator == and ===

// ==  it change data type of operand before equality check( internal type conversion ).
// ===  it check value as well as data type of variable.

let x = 5;
let y = '5';
console.log(x==y); // true 
console.log(x != y); // false
console.log(x === y); // false 
console.log(x !== y); // true
console.log();

let c = 5;
const d = 5;
console.log(c==d); // true
console.log(c != d); // false
console.log(c === d); // true
console.log(c !== d); // false

let a =[1,2,3];
let b =[1,2,3];
console.log(a == b); // false
console.log(a === b); // false
console.log();

// a asign to F, in memory a and f pointing to same memory location so,
let f = a;
console.log(f == a); // true
console.log( f === a); // true
console.log();

// here f assigned to g but we use spread oprator 
//The spread syntax [...f] “spreads” the array into separate arguments.
let g = [...f]; // let g = [1,2,3]
console.log(f == g); // false
console.log( f === g); // falsec    