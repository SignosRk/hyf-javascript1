// 1)

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

console.log(myString.length);

myString = "hello this is a difficult to read sentence";
console.log(myString);

console.log(myString.length);

// 2)

let favouriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favouriteAnimals.push('turtle');

console.log(favouriteAnimals);

favouriteAnimals.splice(1, 0, 'meerkat');

console.log("the new value of the array is : 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ");

console.log(favouriteAnimals);

console.log(favouriteAnimals.length);

favouriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'];

removed = favouriteAnimals.splice(3, 1);

console.log(favouriteAnimals);

favouriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'turtle'];

let kittyKat = favouriteAnimals.indexOf('meerkat');

console.log("The item you are looking for is at index : 1");

console.log(kittyKat);