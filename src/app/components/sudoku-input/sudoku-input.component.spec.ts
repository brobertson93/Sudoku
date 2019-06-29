import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuInputComponent } from './sudoku-input.component';

describe('SudokuInputComponent', () => {
  let component: SudokuInputComponent;
  let fixture: ComponentFixture<SudokuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
