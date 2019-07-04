import { Component, OnInit } from '@angular/core';
import { SudokuService } from 'src/app/services/sudoku.service';
import { SudokuSquare } from 'src/app/dto/sudoku-square';

@Component({
  selector: 'app-sudoku-grid',
  templateUrl: './sudoku-grid.component.html',
  styleUrls: ['./sudoku-grid.component.scss']
})
export class SudokuGridComponent implements OnInit {

  puzzle: SudokuSquare[][];

  constructor(public sudokuService: SudokuService) { }

  ngOnInit() {
    this.sudokuService.observablePuzzle.subscribe(data => {
      this.puzzle = data;
    })


  }

  button() {

    this.sudokuService.toggle = !this.sudokuService.toggle;
  }

}
