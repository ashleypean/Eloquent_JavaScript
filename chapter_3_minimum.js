//Exercise on page 55

/*
The standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum
*/

//Pre ES-2015 syntax
function min(num1, num2) {
  return num1 < num2 ? num1: num2
}

//Arrow function syntax
min2 = (num1, num2) => num1 < num2 ? num1: num2


console.log(min(13,10))
console.log(min2(13,10))