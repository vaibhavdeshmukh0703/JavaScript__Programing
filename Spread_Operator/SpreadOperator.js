console.log([["ððððĪŠð"]]); // [ [ 'ððððĪŠð' ] ]
console.log([...["ððððĪŠð"]]); // [ 'ððððĪŠð' ]
console.log(...["ððððĪŠð"]); // ððððĪŠð
console.log();

// use for copy object == combining the properties of two JavaScript objects:
const hello = { hello : 'ððððĪŠð'};
const world = { world : 'ððððððĨ°ððĪĐ'}
const helloword = {...hello,...world};  // { hello: 'ððððĪŠð', world: 'ððððððĨ°ððĪĐ' }
console.log(helloword);
console.log();


// Copying an array
// Using the âĶ spread operator is a convenient way to copy an array or combine arrays, and it can even add new items:// Use for copy array
const fruits = ['ð','ð','ð','ð','ð'];
const moreFruits = [...fruits];
console.log(moreFruits); // [ 'ð', 'ð', 'ð', 'ð', 'ð' ]
fruits[0] = 'ð';
console.log(...[...fruits,'...',...moreFruits]); // ð ð ð ð ð ... ð ð ð ð ð

// spread oprator == for function 
const a = [1,2,3,4,5];
console.log(Math.max(...a)); // 5 Here we cant pass array as an argument to the function using spreed we destructure array
console.log(Math.min(...a)); // 1

const fruitStand = ['ð','ð','ð'];
const fruiteSell = (f1,f2,f3) =>{ console.log(`Fruite for sell ${f1} ,${f2} , ${f3}`)};
fruiteSell(...fruitStand); // Fruite for sell ð ,ð , ð

fruitStand.pop();
fruitStand.pop();

fruitStand.push('ð')
fruitStand.push('ð')

fruiteSell(...fruitStand); // Fruite for sell ð ,ð , ð
fruitStand.pop();
fruitStand.pop();

fruiteSell(...fruitStand,'ð'); // ð ,ð , undefined

let value =0;
const addition = (...args)=>{
    //console.log(args);
  for (const element of args) {
    value += element;
  }
  return value;
}

console.log(addition(1,2,3,4)); // 10



