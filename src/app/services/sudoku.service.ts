import { Injectable, OnInit } from '@angular/core';
import { SudokuSquare } from '../dto/sudoku-square';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  public toggle: boolean = false;
  public puzzle: Array<Array<SudokuSquare>> = [];
  public testable = "test";
  private behavior: BehaviorSubject<Array<Array<SudokuSquare>>> = new BehaviorSubject(this.puzzle);
  public observablePuzzle = this.behavior.asObservable();
  constructor() {
    this.emptyPuzzle();
  }

  emptyPuzzle() {

    console.log('setting up the puzzle');
    this.puzzle = [];
    for (let i = 0; i < 9; i++) {
      let array: Array<SudokuSquare> = [];
      for (let j = 0; j < 9; j++) {
        array.push(new SudokuSquare());
      }
      this.puzzle.push(array);
    }
    this.behavior.next(this.puzzle);
  }

  setPuzzle(input: String) {
    this.emptyPuzzle();
    if (input.length !== 81) {
      return;
    }
    for (let i = 0; i < input.length; i++) {
      this.puzzle[Math.floor(i / 9)][i % 9].value = parseInt(input.charAt(i));
      if (parseInt(input.charAt(i)) !== 0) {

        this.puzzle[Math.floor(i / 9)][i % 9].imported = true;

      }
    }
    this.updatePossibilities();
  }

  updatePossibilities() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.puzzle[i][j].possibilities = this.getPossibilities(i, j);
      }
    }
    this.behavior.next(this.puzzle);
  }

  getPossibilities(row, column): Array<number> {
    let array: Array<number> = [];
    for (let i = 0; i < 9; i++) {
      if (i !== column) {

        array.push(this.puzzle[row][i].value);
      }
      if (i !== row) {
        array.push(this.puzzle[i][column].value);
      }
    }
    let rowMin = (3 * Math.floor(row / 3));
    let columnMin = (3 * Math.floor(column / 3));
    for (let i = rowMin; i < rowMin + 3; i++) {
      for (let j = columnMin; j < columnMin + 3; j++) {
        if (i != row || j != column) {

          array.push(this.puzzle[i][j].value);
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
