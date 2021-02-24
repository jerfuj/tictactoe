const readlineSync = require('readline-sync');

class Game {
  constructor() {
    this.board = [
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_']
    ];
    this.turn = 'X';
    this.totalMoves = 0;
  }

  placeMove() {
    console.log(this.board.join('\r\n'))
    let move = readlineSync.question(`Player ${this.turn} Enter a move (TL for top-left, MM for middle-middle, BR for bottom-right): `)
    if (move === 'TL') {
      this.board[0][0] === '_' ? this.board[0][0] = this.turn : this.placeMove();
      if (this.checkColumn(0) || this.checkRow(0) || this.checkTopLeftDiag()) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'TM') {
      this.board[0][1] === '_' ? this.board[0][1] = this.turn : this.placeMove();
      if (this.checkColumn(1) || this.checkRow(0)) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'TR') {
      this.board[0][2] === '_' ? this.board[0][2] = this.turn : this.placeMove();
      if (this.checkColumn(2) || this.checkRow(0) || this.checkBotLeftDiag()) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'ML') {
      this.board[1][0] === '_' ? this.board[1][0] = this.turn : this.placeMove();
      if (this.checkColumn(0) || this.checkRow(1)) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'MM') {
      this.board[1][1] === '_' ? this.board[1][1] = this.turn : this.placeMove();
      if (this.checkColumn(1) || this.checkRow(1) || this.checkBotLeftDiag() || this.checkTopLeftDiag()) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'MR') {
      this.board[1][2] === '_' ? this.board[1][2] = this.turn : this.placeMove();
      if (this.checkColumn(2) || this.checkRow(1)) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'BL') {
      this.board[2][0] === '_' ? this.board[2][0] = this.turn : this.placeMove();
      if (this.checkColumn(0) || this.checkRow(2) || this.checkBotLeftDiag()) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'BM') {
      this.board[2][1] === '_' ? this.board[2][1] = this.turn : this.placeMove();
      if (this.checkColumn(1) || this.checkRow(2)) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }
    if (move === 'BR') {
      this.board[2][2] === '_' ? this.board[2][2] = this.turn : this.placeMove();
      if (this.checkColumn(2) || this.checkRow(2) || this.checkTopLeftDiag()) {
        return console.log(`Player ${this.turn} Wins!`)
      }
    }

    this.totalMoves++;
    if (this.totalMoves === 9) {
      return console.log('DRAW');
    }
    this.turn = this.turn === 'X' ? 'O' : 'X';
    this.placeMove();
  }

  checkColumn(col) {
    const column = this.board.map(row => {
      return row[col];
    })
    return new Set(column).size === 1;
  }

  checkRow(rowIdx) {
    const row = this.board[rowIdx];
    return new Set(row).size === 1;
  }

  checkTopLeftDiag() {
    const topLeftDiag = [this.board[0][0], this.board[1][1], this.board[2][2]];
    return new Set(topLeftDiag).size === 1;
  }

  checkBotLeftDiag() {
    const botLeftDiag = [this.board[2][0], this.board[1][1], this.board[0][2]];
    return new Set(botLeftDiag).size === 1;
  }

}

let game = new Game();
game.placeMove();
