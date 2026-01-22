import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoninputComponent } from './components/personinput/personinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeinputComponent } from './components/employeeinput/employeeinput.component';
import { PersonInput1Component } from './components/person-input1/person-input1.component';
import { Employeeinput1Component } from './components/employeeinput1/employeeinput1.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoninputComponent,
    EmployeeinputComponent,
    PersonInput1Component,
    Employeeinput1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
