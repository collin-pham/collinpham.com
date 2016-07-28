// Set Landing Page Height
if (screen.availHeight + 'px' >= screen.availWidth + 'px') {
  document.getElementById('landing-page').style.height = screen.availHeight + 'px'
  document.getElementById('welcome-text').style.marginTop = screen.availHeight / 4 + 'px'
} else {
  document.getElementById('landing-page').style.height = screen.availWidth + 'px'
  document.getElementById('welcome-text').style.marginTop = screen.availWidth / 4 + 'px'
}

// Make Sudoku Board
var table = document.getElementById('sudoku-board')
for (var i = 0; i < 9; i++) {
  var row = table.insertRow(i)
  if (i % 3 == 2) {
    row.setAttribute('id', 'sudoku-row')
  }
  for (var j = 0; j < 9; j++) {
    var cell = row.insertCell(j)
    if (j % 3 == 2) {
      cell.setAttribute('id', 'sudoku-col')
    }
    var input = document.createElement('input')
    input.maxLength = 1
    input.name = 'cell'

    cell.appendChild(input)
  }
}
if (document.getElementById('sudoku-board').offsetWidth > screen.availWidth) {
  document.getElementById('sudoku-container').style.fontSize = '18px'

  while (document.getElementById('sudoku-board').offsetWidth / screen.availWidth > 0.7 && parseInt(document.getElementById('sudoku-container').style.fontSize) > 1) {
    document.getElementById('sudoku-container').style.fontSize = parseInt(document.getElementById('sudoku-container').style.fontSize) - 1 + 'px'
  }
}
