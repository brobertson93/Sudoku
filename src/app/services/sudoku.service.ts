import { Injectable, OnInit } from '@angular/core';
import { SudokuSquare } from '../dto/sudoku-square';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  public toggleSolution: boolean = false;
  public toggle: boolean = false;
  public puzzle: SudokuSquare[][] = [];
  public solvedPuzzle: SudokuSquare[][] = [];

  private behavior: BehaviorSubject<Array<Array<SudokuSquare>>> = new BehaviorSubject(this.puzzle);
  public observablePuzzle = this.behavior.asObservable();
  constructor() {
    this.emptyPuzzle();
  }

  emptyPuzzle() {

    console.log('setting up the puzzle');
    this.puzzle = [];
    this.solvedPuzzle = [];
    for (let i = 0; i < 9; i++) {
      let array: Array<SudokuSquare> = [];
      let solvedArray: Array<SudokuSquare> = [];
      for (let j = 0; j < 9; j++) {
        array.push(new SudokuSquare());
        solvedArray.push(new SudokuSquare());
      }
      this.puzzle.push(array);
      this.solvedPuzzle.push(solvedArray);
    }


    this.solvepuzzle();
    this.behavior.next(this.puzzle);
  }


  findsquare(puzzle: SudokuSquare[][]) {

    for (let i = 0; i < puzzle.length; i++) {




      for (let k = 0; k < puzzle[i].length; k++) {

        if (puzzle[i][k].value == 0) {

          return puzzle[i][k];

        }



      }
    }
    return null;
  }

  recursion(puzzle) {

    var sqr = this.findsquare(puzzle);

    if (sqr == null) {

      return true;
    }

    const copy = Object.assign([], sqr.possibilities);

    for (let i = 0; i < copy.length; i++) {

      sqr.value = copy[i]
      this.updatePossibilities(puzzle);

      if (this.recursion(puzzle) == true) {

        return true;


      }

    }
    sqr.value = 0;
    return false;




  }

  solvepuzzle() {
    setTimeout(function () {

      let solvable = this.recursion(this.solvedPuzzle);
    }.bind(this))


  }

  setPuzzle(input: String) {
    this.emptyPuzzle();
    if (input.length !== 81) {
      return;
    }
    for (let i = 0; i < input.length; i++) {
      this.puzzle[Math.floor(i / 9)][i % 9].value = parseInt(input.charAt(i));
      this.solvedPuzzle[Math.floor(i / 9)][i % 9].value = parseInt(input.charAt(i));
      if (parseInt(input.charAt(i)) !== 0) {

        this.puzzle[Math.floor(i / 9)][i % 9].imported = true;


      }
      this.solvedPuzzle[Math.floor(i / 9)][i % 9].imported = true;
    }
    this.solvepuzzle();
    this.updatePossibilities(this.puzzle);
  }

  updatePossibilities(puzzle) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        puzzle[i][j].possibilities = this.getPossibilities(i, j, puzzle);
      }
    }
  }

  getPossibilities(row, column, puzzle): Array<number> {
    let array: Array<number> = [];
    for (let i = 0; i < 9; i++) {
      if (i !== column) {

        array.push(puzzle[row][i].value);
      }
      if (i !== row) {
        array.push(puzzle[i][column].value);
      }
    }
    let rowMin = (3 * Math.floor(row / 3));
    let columnMin = (3 * Math.floor(column / 3));
    for (let i = rowMin; i < rowMin + 3; i++) {
      for (let j = columnMin; j < columnMin + 3; j++) {
        if (i != row || j != column) {

          array.push(puzzle[i][j].value);
        }
      }

    }

    let possibilities: Array<number> = [];
    for (let i = 1; i <= 9; i++) {
      if (array.indexOf(i) == -1) {
        possibilities.push(i);
      }
    }
    return possibilities;

  }
}
