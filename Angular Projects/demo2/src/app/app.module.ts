import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeaddComponent } from './components/employeeadd/employeeadd.component';
import { EmployeedeleteComponent } from './components/employeedelete/employeedelete.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { PipingexampleComponent } from './components/pipingexample/pipingexample.component';
import { Ifexample1Component } from './components/ifexample1/ifexample1.component';
import { Ifexample2Component } from './components/ifexample2/ifexample2.component';
import { Ifexample3Component } from './components/ifexample3/ifexample3.component';
import { Switchexample1Component } from './components/switchexample1/switchexample1.component';
import { Switchexample2Component } from './components/switchexample2/switchexample2.component';
import { Forloopexample1Component } from './components/forloopexample1/forloopexample1.component';
import { Forloopexample2Component } from './components/forloopexample2/forloopexample2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeaddComponent,
    EmployeedeleteComponent,
    EmployeelistComponent,
    PipingexampleComponent,
    Ifexample1Component,
    Ifexample2Component,
    Ifexample3Component,
    Switchexample1Component,
    Switchexample2Component,
    Forloopexample1Component,
    Forloopexample2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
