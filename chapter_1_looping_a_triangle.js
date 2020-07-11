//Exercise can be found on page 37 of the book

/*Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######  
*/

triangle1 = input => {
  if(input === 0) return console.log('This triangle has no rows')
  for(let i = 0; i <= input; i++) {
    let line = ''
    for(let j = 0; j < i; j++) {
      line+= '*'
    }
    console.log(line)
  }
}

triangle1(prompt("How many rows would you like in triangle 1?"))

triangle2 = (input, line = '*') => {
  if(input === 0) return
  console.log(line)
  return triangle2(--input, line+= '*')
}

triangle2(prompt("How many rows would you like in triangle 2?"))
