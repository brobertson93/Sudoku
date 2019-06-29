import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuSquareComponent } from './sudoku-square.component';

describe('SudokuSquareComponent', () => {
  let component: SudokuSquareComponent;
  let fixture: ComponentFixture<SudokuSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
