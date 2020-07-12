//Exercise can be found on page 38

/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

//Solved with a for loop and if/else chain
fizzbuzz1 = num => {
  let arr = []
  for(let i = 1; i <= num; i++) {
    if(i%15 === 0) 
      arr.push("FizzBuzz")
    else if(i%3 === 0)
      arr.push("Fizz")
    else if(i%5 === 0)
      arr.push("Buzz")
    else 
      arr.push(i)
  }
  return console.log(arr)
}

//Solved with a recursive function and switch statement
fizzbuzz2 = (num, arr = [], counter = 1) => {
//Break statement
if(counter > num)
   return console.log(arr)

//Print num/Fizz/Buzz/FizzBuzz
if(counter%15 === 0) 
      arr.push("FizzBuzz")
    else if(counter%3 === 0)
      arr.push("Fizz")
    else if(counter%5 === 0)
      arr.push("Buzz")
    else 
      arr.push(counter)

return fizzbuzz2(num, arr, ++counter)
}


const num = Number(prompt("How many numbers would you like to input?"))
fizzbuzz1(num)
fizzbuzz2(num)




