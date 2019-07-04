import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { ContactComponent } from './components/contact/contact.component';
import { SudokuGridComponent } from './components/sudoku-grid/sudoku-grid.component';
import { SudokuSquareComponent } from './components/sudoku-square/sudoku-square.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { SudokuInputComponent } from './components/sudoku-input/sudoku-input.component';
import { SudokuGeneratorComponent } from './components/sudoku-generator/sudoku-generator.component';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';
import { NegativeConvertPipe } from './pipes/negative-convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SudokuComponent,
    ContactComponent,
    SudokuGridComponent,
    SudokuSquareComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    SudokuInputComponent,
    SudokuGeneratorComponent,
    ApiIntegrationComponent,
    NegativeConvertPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
