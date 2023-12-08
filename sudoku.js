const fs = require("fs");
const { EOL } = require("os");
function read() {
  const allSudoku = fs.readFileSync("./puzzles.txt", "utf-8").trim().split(EOL);
  return allSudoku;
}
const arrSudoku = read();

function solve() {
  const strokes = arrSudoku.map((el) => el.split(""));
  const one = strokes[0];

  let newArr = [];
  for (let i = 0; i < one.length; i += 1) {
    let arrIn = one.splice(0, 9);
    newArr.push(arrIn);
  }
  return newArr;
}

const arraysOne = solve();
console.log(arraysOne);



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
