import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { MainComponent } from './components/main/main.component';
import { LiTeleComponent } from './components/li-tele/li-tele.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { LiSisComponent } from './components/li-sis/li-sis.component'



const routes: Routes = [
  {path: 'student', component: AddStudentComponent},
  {path: 'subject', component: AddSubjectComponent},
  {path: 'aero', component: MainComponent},  
  {path: 'tele', component: LiTeleComponent},
  {path: 'sis', component: LiSisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
