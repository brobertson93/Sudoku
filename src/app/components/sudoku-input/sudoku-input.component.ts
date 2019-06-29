import { Component, OnInit } from '@angular/core';
import { SudokuService } from 'src/app/services/sudoku.service';

@Component({
  selector: 'app-sudoku-input',
  templateUrl: './sudoku-input.component.html',
  styleUrls: ['./sudoku-input.component.scss']
})
export class SudokuInputComponent implements OnInit {

  isError: boolean = false;

  constructor(private sudokuService: SudokuService) {

  }

  ngOnInit() {

  }

  importPuzzle(input: string) {
    var isnum = /^\d+$/.test(input);
    if (input.length !== 81 || isnum == false) {
      this.isError = true;
      return;
    }
    this.isError = false;
    this.sudokuService.setPuzzle(input);

  }

}

// 020900030009030600000601007008000000405790000000000100040000300700800005000506001