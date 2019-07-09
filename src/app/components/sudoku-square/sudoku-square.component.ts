import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SudokuSquare } from 'src/app/dto/sudoku-square';
import { SudokuService } from 'src/app/services/sudoku.service';


@Component({
  selector: 'app-sudoku-square',
  templateUrl: './sudoku-square.component.html',
  styleUrls: ['./sudoku-square.component.scss']
})
export class SudokuSquareComponent implements OnInit {

  @Input('square') square: SudokuSquare;
  @ViewChild("data", { static: false }) dataField: ElementRef;

  focused: boolean = false;
  constructor(public sudokuservice: SudokuService) { }

  ngOnInit() {

  }

  onClick() {
    this.focused = true;
    setTimeout(() => this.dataField.nativeElement.focus(), 0);

  }

  focusOut() {

    this.focused = false;

  }
  onKey(event: KeyboardEvent) { // with type info
    //this.values += (<HTMLInputElement>event.target).value + ' | ';
    var isnum = /^\d+$/.test(event.key);


    if (event.key == "Backspace" || event.key == "Delete") {
      this.square.value = 0;

    }

    else if (!isnum) {
      event.preventDefault();

    }

    else {

      this.square.value = parseInt(event.key);
      this.sudokuservice.updatePossibilities();
      event.preventDefault();

    }

  }

}
