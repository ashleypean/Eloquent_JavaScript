//Exercise can be found on page 38 
/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/


//Solved with a for loop
chessboard1 = (height, width) => {
  //Empty string to store chessboard 
  let board = ''
  //Outer loop will create each row, inner loop(s) will create each column
  //Conditional for inner for loop to see if row starts with an empty space or a '#' sign
  for(let i = 1; i <= height; i++) {
    if(i%2 === 0) {
      for(let j = 0; j < width; j++) {
        //conditional alternates b/w adding a space and adding a # sign
        j%2 === 0 ? board+= '#': board+= ' '
      }
    }else {
      for(let j = 0; j < width; j++) {
        //conditional alternates b/w adding a space and adding a # sign
        j%2 === 0 ? board+= ' ': board+= '#'
        }
    
     }
    board+= '\n'
   }
  return console.log(board)
}



//Solved with a recursive function 

chessboard2 = (height, width, board = '', counter = 1) => {
  if(counter === height)
    return board

  if(counter%2 === 0) {
    for(let i = 0; i < width; i++){
      i%2 === 0 ? board+= '#': board+= ' '
    }
    }else {
      for(let i = 0; i < width; i++){
        i%2 === 0 ? board+= ' ': board+= '#'
      }
    }
  board+= '\n'

return chessboard2(height, width, board, counter+=1)
}


const height = Number(prompt('What do you want the height of the board to be?'))
const width = Number(prompt('What do you want the width of the board to be?'))

chessboard1(height, width)
console.log(chessboard2(height, width))
