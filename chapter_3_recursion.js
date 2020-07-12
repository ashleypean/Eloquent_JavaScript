//Exercise on pages 55 and 56

/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

//Recursive solution (Pre-ES6 syntax)
function isEven1(num) {
  if(num === 0) return true
  if(num === 1) return false

  return isEven1(num-2)
}

//Recursive solution (ES6 syntax) and ternary operators
isEven2 = num => num === 0 ? true: num === 1 ? false: isEven2(num-2)


const num  = Number(prompt("What number would you like to check is even?"))
console.log(isEven1(num))
console.log(isEven2(num))