/* global jQuery */
/* exported getCellValues, Random, Clear */
function SudokuBoard (values) {
  this.boardSize = Math.sqrt(values.length) // Calculate the board size.
  this.boardDomain = [] // Initialize the domain.
  this.boardValues = [] // Initialize the values.

  for (var i = 0; i < this.boardSize; i++) { 
    var domainRow = [] // Initialize the domain row.
    var valuesRow = [] // Initialize the values row.

    for (var j = 0; j < this.boardSize; j++) {
      var cellDomain = [] // Initialize the cell domain.
      var cellValue = [] // Initialize the cell value.

      if (values[i * this.boardSize + j].value == '') { // If the input cell is empty,
        for (var k = 1; k < this.boardSize + 1; k++) { 
          cellDomain.push(k) // Add all possible values to the cell domain 
        }
        cellValue.push(0) // and a 0 to the values.
      } else { // Else, add the input value to the domain.
        cellDomain.push(parseInt(values[i * this.boardSize + j].value))
        cellValue.push(parseInt(values[i * this.boardSize + j].value))
      } 
      domainRow.push(cellDomain) // Add the cell domain.
      valuesRow.push(cellValue) // Add the cell value.
    }
    this.boardDomain.push(domainRow) // Add the row domain.
    this.boardValues.push(valuesRow) // Add the row values.
  }
}

function getCellValues () {
  var HTMLValues = document.getElementsByName('cell') // Get the user input.
  var sb = new SudokuBoard(HTMLValues) // Make the Sudoku Board.
  if (!isValidInput(sb, HTMLValues)) { // Check if the board has legal inputs. 
    return alert('Please only enter numbers between 1 and 9')
  }

  if (!isLegal(sb)) { // Check if the board has legal set up.
    return alert('Illegal board set-up.  You cannot place identical numbers in the same row, column, or square.')
  }
  sb = Solve(sb) // Solve!
  if (sb == 'backtrack') { // If backtracking did not return a board, there is no solution.
    return alert('Wow! Seems this board has no solution.')
  }
  for (var row = 0; row < sb.boardSize; row++) { // Display solved board.
    for (var col = 0; col < sb.boardSize; col++) {
      HTMLValues[row * sb.boardSize + col].value = sb.boardValues[row][col]
    }
  }
}
function Random () {
  var HTMLValues = document.getElementsByName('cell') // Get the cells.
  var sb = new SudokuBoard(HTMLValues) // Make the Sudoku Board.

  Clear() // Clear any user input.

  sb = new SudokuBoard(HTMLValues) // Remake the Sudoku Board.
  for (var row = 0; row < sb.boardSize; row++) { // For each cell,
    for (var col = 0; col < sb.boardSize; col++) {
      var move = Math.floor(Math.random() * 9) + 1 // generate a random number.
      if (Math.floor(Math.random() * 7) == 0 // If true (1/7 of the time)
      && MoveAllowed(sb, [row, col], move)) { // and the move is legal,
        HTMLValues[row * sb.boardSize + col].value = move.toString() // add it to the HTMLValues
        HTMLValues = document.getElementsByName('cell')
        sb = new SudokuBoard(HTMLValues) // and update the Sudoku Board.
      } 
    }
  }
}
function Clear () {
  var HTMLValues = document.getElementsByName('cell') // Get the cells.
  for (var i = 0; i < HTMLValues.length; i++) {
    HTMLValues[i].value = '' // Clear the cells.
  }
}
function Solve (sb) {
  if (isComplete(sb)) { // If the board is complete, return it.
    return sb
  }

  ForwardCheck(sb) // Forward check to narrow the domain.

  var cord = MRV(sb) // Choose the cell with the smallest domain to analyze next.
  var row = cord[0] // Get the row of the chosen cell
  var col = cord[1] // Get the col of the chosen cell

  for (var index = 0; index < sb.boardDomain[row][col].length; index++) { // For each value in the chosen cell domain.
    var value = sb.boardDomain[row][col][index]

    if (MoveAllowed(sb, cord, value)) { // If the specific value is a legal move.
      var ob = jQuery.extend(true, {
      }, sb) //Create a deep copy of the board to reference in case of backtracking.

      sb.boardDomain[row][col] = [value] // Commit to the domain.
      sb.boardValues[row][col] = [value] // Commit to value.
      var nb = Solve(sb) // Solve the next cell.
      if (nb != 'backtrack') {
        return nb // Legal board found! Traverse up.
      } else {
        sb = ob // Illegal board :(. Backtrack to last legal board.
      }
    }
  }
  return 'backtrack' // No values in the cell domain are legal moves.  Backtrack.  
}
function ForwardCheck (sb) {
  // Initialize
  var subSquare = Math.sqrt(sb.boardSize) 
  var index = -1

  var row
  var col

  var cur_row
  var cur_col

  for (row = 0; row < sb.boardSize; row++) { // Select each Sudoku Board cell in order.
    for (col = 0; col < sb.boardSize; col++) {
      if (sb.boardDomain[row][col].length == 1) { // If there is a definite value in the cell, we can eliminate column, row, and square possibilites.
        // Col domain
        for (cur_col = 0; cur_col < sb.boardSize; cur_col++) { // For every cell in the selected cells column,
          index = sb.boardDomain[row][cur_col].indexOf(sb.boardDomain[row][col][0]) // If the selected cell is in the current cells domain,
          if (index != -1 
            && col != cur_col  // And this isn't the selected cell,
            && sb.boardDomain[row][cur_col].length > 1) { // And the current cell doesn't have a definite value,
            sb.boardDomain[row][cur_col].splice(index, 1) // Then remove the selected cell value from the current cell domain.
          }
        }

        // Row domain
        for (cur_row = 0; cur_row < sb.boardSize; cur_row++) { // For every cell in the selected cells row,
          index = sb.boardDomain[cur_row][col].indexOf(sb.boardDomain[row][col][0]) // If the selected cell is in the current cells domain,
          if (index != -1
            && row != cur_row // And this isn't the selected cell,
            && sb.boardDomain[cur_row][col].length > 1) { // And the current cell doesn't have a definate value, 
            sb.boardDomain[cur_row][col].splice(index, 1) // Then remove the selected cell value from the current cell domain.
          }
        }

        // Square domain
        var csr = Math.floor(row / subSquare) * subSquare // The current square row.
        var csc = Math.floor(col / subSquare) * subSquare // The current square col.

        for (cur_row = 0; cur_row < subSquare; cur_row++) { // For every cell in the selected cells square,
          for (cur_col = 0; cur_col < subSquare; cur_col++) {
            index = sb.boardDomain[csr + cur_row][csc + cur_col].indexOf(sb.boardDomain[row][col][0]) // If the selected cell is in the current cells domain,
            if (index != -1
              && row != csr + cur_row
              && col != csc + cur_col // And this isn't the current cell,
              && sb.boardDomain[csr + cur_row][csc + cur_col].length > 1) { // And the current cell doesn't have a definate value,
              sb.boardDomain[csr + cur_row][csc + cur_col].splice(index, 1) // Then remove the selected cell value from the current cell domain.
            }
          }
        }
      }
    }
  }
}
function MRV (sb) {
  for (var len = 1; len < sb.boardSize + 1; len++) { // For each possible domain length 1-9, starting with 1
    for (var row = 0; row < sb.boardSize; row++) { // Go through each cell in the Sudoku Board in order
      for (var col = 0; col < sb.boardSize; col++) {
        if (sb.boardDomain[row][col].length == len // If the cell length is equal to the said length
          && sb.boardValues[row][col] == 0) { // And it is empty,
          return [row, col] // Return its location.
        }
      }
    }
  }
}

function isComplete (sb) {
  for (var row = 0; row < sb.boardSize; row++) { // For each cell in the Sudoku Board.
    for (var col = 0; col < sb.boardSize; col++) {
      if (sb.boardDomain[row][col].length > 1
        || sb.boardValues[row][col] == 0) {
        return false // If the cell domain length is > 1, the board isn't complete
      }
    }
  }
  return isLegal(sb) // All cells, filled. Is the configuration legal?
}

function MoveAllowed (sb, cord, v) {
  // Initialize
  var subSquare = Math.sqrt(sb.boardSize)
  var row = []
  var col = []
  var sq = []

  // Get values in selected row.
  for (var i = 0; i < sb.boardSize; i++) {
    if (sb.boardDomain[cord[0]][i].length == 1 && cord[1] != i) {
      row.push(sb.boardDomain[cord[0]][i][0])
    }
  }

  // If the given value is repeated, return false.
  if (row.indexOf(v) != -1) {
    return false
  }

  // Get values in selected column.
  for (var j = 0; j < sb.boardSize; j++) {
    if (sb.boardDomain[j][cord[1]].length == 1
      && cord[0] != j) {
      col.push(sb.boardDomain[j][cord[1]][0])
    }
  }

  // If the given value is repeated, return false.
  if (col.indexOf(v) != -1) {
    return false
  }

  // Get values in selected square.
  var csr = Math.floor(cord[0] / subSquare) * subSquare //The current square row
  var csc = Math.floor(cord[1] / subSquare) * subSquare //The current square col

  for (var k = 0; k < subSquare; k++) {
    for (var l = 0; l < subSquare; l++) {
      if (sb.boardDomain[csr + k][csc + l].length == 1
        && csr + k != cord[0]
        || csc + l != cord[1]) {
        sq.push(sb.boardDomain[csr + k][csc + l][0])
      }
    }
  }

  // If the given value is repeated, return false.
  if (sq.indexOf(v) != -1) {
    return false
  }
  return true
}

function isLegal (sb) {
  var subSquare = Math.sqrt(sb.boardSize)
  var csr = -1
  var csc = -1

  for (var row = 0; row < sb.boardSize; row++) {
    for (var col = 0; col < sb.boardSize; col++) {
      for (var i = 0; i < sb.boardSize; i++) {
        if (sb.boardValues[row][i][0] == sb.boardValues[row][col][0] 
          && i != col
          && sb.boardValues[row][i][0] != 0) {
          return false //If there is a repeated number in the row, the board isn't complete.
        }

        if (sb.boardValues[i][col][0] == sb.boardValues[row][col][0]
          && i != row
          && sb.boardValues[i][col][0] != 0) {
          return false //If there is a repeated number in the column, the board isn't complete.
        }
      }

      csr = Math.floor(row / subSquare) * subSquare //The current square row.
      csc = Math.floor(col / subSquare) * subSquare //The current square col.

      for (var j = 0; j < subSquare; j++) {
        for (var k = 0; k < subSquare; k++) {
          if (sb.boardValues[csr + j][csc + k][0] == sb.boardValues[row][col][0]
            && csr + j != row
            && csc + k != col
            && sb.boardValues[csr + j][csc + k][0] != 0) {
            return false //If there is a repeated number in the square, the board isn't complete.
          }
        }
      }
    }
  }
  return true
}

function isValidInput (sb, HTMLValues) {
  var validInput = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  // If the input isn't in the above array, it is not valid.
  for (var row = 0; row < sb.boardSize; row++) {
    for (var col = 0; col < sb.boardSize; col++) {
      if (validInput.indexOf(HTMLValues[row * sb.boardSize + col].value) == -1) {
        return false
      }
    }
  }
  return true
}
