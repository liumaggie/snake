const Snake = require('./snake');
const Apple = require('./apple');

class Board {
  constructor(length) {
    this.length = length;
    this.snake = new Snake(this);
    this.apple = new Apple(this);
    this.grid = this.setup();
  }

  setup() {
    const grid = [];
    for (let i=0; i < this.length; i++) {
      let row = [];
      for (let j=0; j < this.length; j++) {
        row.push(" ");
      }
      grid.push(row);
    }
    return grid;
  }

}

module.exports = Board;
