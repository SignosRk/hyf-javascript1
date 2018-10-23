// 1)

let spanish
spanish = "Hola, mundo!";

let english 
english = "Hello, world!";

let dutch 
dutch = "Hallo, wereld!";

console.log(spanish, english, dutch);

// 2)

let way1 = "I'm awesome";
let way2 = 'I\'m awesome';

console.log(way1)
console.log(way2);

// 3) variable x
let x;
console.log('the value of my variable x will be: 100');
console.log(x);
x = 100;
console.log('the value of my variable x will be: 100');
console.log(x);

// 4) variable y
let y = 'hello, world';
console.log('the value of my string will be: 500');
console.log(y);
y = 'Hola, mundo!';
console.log('the value of my string will be: 500');
console.log(y);

// 5) rounding a number
// to round an integer you have to use Math.round(7.25)
console.log(Math.round(7.25));
let z = 7.25;
console.log(z);
let a = 7;
console.log(a);

// to compare you do

console.log(z > a);
let c = z;
console.log(c);

// 6) Arrays

let emptyArray = [];
console.log('The value of my empty array should be: empty');
console.log(emptyArray);

let favouriteAnimals = ['Wolves', 'cats', 'dogs', 'snakes'];
console.log(favouriteAnimals);

favouriteAnimals.push ('baby pig');

console.log(favouriteAnimals);

// 7) More strings

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

// 8) checks the typeof

let var1 = 10;
console.log(var1);
let var2 = '15';
console.log(var2);
let var3 = {myName: "Yaacob"};
console.log(var3);
let var4 = '25';
console.log(var4);
console.log('all the variables are numeric, according to me.');
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);

if (var1 != var2) {
    console.log('NOT THE SAME TYPE');
}

if (var1 != var3) {
    console.log('NOT THE SAME TYPE');
}

if (var2 < var4) {
    console.log('SAME TYPE');
}

// 9) Remainder

let varx = 7;
h = varx % 3;
console.log(h);

f = varx % 5
console.log(f);

m = varx % 2
console.log(m);

// 10)

// Multiple arrays
let multipleArray = ["friends", 10, true]; 
console.log(multipleArray);

// comparing infinities
let val0 = 6;
let val1 = 0;
let val2 = 6 / 0; 
console.log(val2);

let val3 = 10;
let val4 = 0;
let val5 = 10 / 0;
console.log(val5);

console.log(val2 === val5);

// more simpel

let valA = 6 / 0;
let valB = 10 / 0;
console.log(valA === valB);