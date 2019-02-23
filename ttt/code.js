"use strict";

let code = {
  fildArray: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  step: 0,
  ttt(arr) {
    let d13 = 0,
      d31 = 0,
      r1 = 0,
      r2 = 0,
      r3 = 0,
      c1 = 0,
      c2 = 0,
      c3 = 0;

    for (let i = 0; i < arr.length; i++) {
      d13 += arr[i][i];
      d31 += arr[i][arr.length - 1 - i];
      r1 += arr[0][i];
      r2 += arr[1][i];
      r3 += arr[2][i];
      c1 += arr[i][0];
      c2 += arr[i][1];
      c3 += arr[i][2];

    }

    if (d13 == 3 || d31 == 3 || r1 == 3 || r2 == 3 || r3 == 3 || c1 == 3 || c2 == 3 || c3 == 3) {
      return ('1');
    } else if (d13 == -3 || d31 == -3 || r1 == -3 || r2 == -3 || r3 == -3 || c1 == -3 || c2 == -3 || c3 == -3) {
      return ('-1')
    } else {
      return ('0')
    }
  },
  push(x, y) {
    this.step++
    if (this.step % 2 == 1) {
      this.fildArray[x][y] = 1;
    } else {
      this.fildArray[x][y] = -1;
    }
    renderer.render();
  }
};
let renderer = {
  render() {
    let feeld = this.generateFeeld();
    let gameFeeld = document.getElementById('ttt');
    gameFeeld.innerHTML = feeld; //так переписывает строе значение, а не добавлет к нему
  },
  generateFeeld() {
    let board = '';
    if (code.ttt(code.fildArray) == 0) {
      for (let i = 0; i < code.fildArray.length; i++) { //наполняем строки
        for (let j = 0; i < code.fildArray[i].length; j++) { //наполняем ячейки
          if (code.fildArray[i][j] == 0) { //пустой квадрат
            board += '<button onclick="code.push(' + i + ',' + j + ')"></button>'
          } else if (code.fildArray[i][j] == 1) { //квадрат с X
            board += '<i>X</i>'
          } else if (code.fildArray[i][j] == -1) { //rdflhfn c Y
            board += '<i>0</i>'
          } else {
            break;
          }
        }
        board += '<br>';
      }
    } else if (code.ttt(code.fildArray) == 1) {
      board += '<span>выиграли КРЕСТИКИ</span>'
    } else if (code.ttt(code.fildArray) == -1) {
      board += '<span>выиграли НОЛИКИ</span>'
    }
    board += '<button style="width: 300px" onclick="renderer.cleareFeeld()">очистить поле</button>';
    return board;
  },
  cleareFeeld() {
    code.fildArray = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    code.step = 0;
    renderer.render();
  }
}
renderer.render();
