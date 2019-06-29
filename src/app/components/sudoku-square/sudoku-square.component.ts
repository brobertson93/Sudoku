import { Component, OnInit, Input } from '@angular/core';
import { SudokuSquare } from 'src/app/dto/sudoku-square';

@Component({
  selector: 'app-sudoku-square',
  templateUrl: './sudoku-square.component.html',
  styleUrls: ['./sudoku-square.component.scss']
})
export class SudokuSquareComponent implements OnInit {

  @Input('square') square: SudokuSquare;

  constructor() { }

  ngOnInit() {
  }

}
