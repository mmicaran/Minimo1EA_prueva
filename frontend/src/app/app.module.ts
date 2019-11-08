import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { MainComponent } from './components/main/main.component';
import { LiTeleComponent } from './components/li-tele/li-tele.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { LiSisComponent } from './components/li-sis/li-sis.component';
import { LiAsigComponent } from './components/li-asig/li-asig.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    MainComponent,
    LiTeleComponent,
    AddSubjectComponent,
    LiSisComponent,
    LiAsigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
