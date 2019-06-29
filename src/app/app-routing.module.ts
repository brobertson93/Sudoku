import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: 'sudoku', component: SudokuComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: ResumeComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
