console.log([["😋😛😜🤪😝"]]); // [ [ '😋😛😜🤪😝' ] ]
console.log([...["😋😛😜🤪😝"]]); // [ '😋😛😜🤪😝' ]
console.log(...["😋😛😜🤪😝"]); // 😋😛😜🤪😝
console.log();

// use for copy object == combining the properties of two JavaScript objects:
const hello = { hello : '😋😛😜🤪😝'};
const world = { world : '🙂🙃😉😊😇🥰😍🤩'}
const helloword = {...hello,...world};  // { hello: '😋😛😜🤪😝', world: '🙂🙃😉😊😇🥰😍🤩' }
console.log(helloword);
console.log();


// Copying an array
// Using the … spread operator is a convenient way to copy an array or combine arrays, and it can even add new items:// Use for copy array
const fruits = ['🍏','🍊','🍌','🍉','🍍'];
const moreFruits = [...fruits];
console.log(moreFruits); // [ '🍏', '🍊', '🍌', '🍉', '🍍' ]
fruits[0] = '🍑';
console.log(...[...fruits,'...',...moreFruits]); // 🍑 🍊 🍌 🍉 🍍 ... 🍏 🍊 🍌 🍉 🍍

// spread oprator == for function 
const a = [1,2,3,4,5];
console.log(Math.max(...a)); // 5 Here we cant pass array as an argument to the function using spreed we destructure array
console.log(Math.min(...a)); // 1

const fruitStand = ['🍏','🍊','🍌'];
const fruiteSell = (f1,f2,f3) =>{ console.log(`Fruite for sell ${f1} ,${f2} , ${f3}`)};
fruiteSell(...fruitStand); // Fruite for sell 🍏 ,🍊 , 🍌

fruitStand.pop();
fruitStand.pop();

fruitStand.push('🍉')
fruitStand.push('🍍')

fruiteSell(...fruitStand); // Fruite for sell 🍏 ,🍉 , 🍍
fruitStand.pop();
fruitStand.pop();

fruiteSell(...fruitStand,'🍊'); // 🍏 ,🍊 , undefined

let value =0;
const addition = (...args)=>{
    //console.log(args);
  for (const element of args) {
    value += element;
  }
  return value;
}

console.log(addition(1,2,3,4)); // 10



