import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { Error404Component } from './components/error404/error404.component';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';

const routes: Routes = [
  { path: 'sudoku', component: SudokuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'data_display', component: ApiIntegrationComponent },
  { path: 'resume', component: ResumeComponent },
  {
    path: '',
    redirectTo: '/resume',
    pathMatch: 'full'
  },
  { path: '**', component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
