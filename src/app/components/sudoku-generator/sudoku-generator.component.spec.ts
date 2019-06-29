import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGeneratorComponent } from './sudoku-generator.component';

describe('SudokuGeneratorComponent', () => {
  let component: SudokuGeneratorComponent;
  let fixture: ComponentFixture<SudokuGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
