import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeaddComponent } from './components/employeeadd/employeeadd.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeeditComponent } from './components/employeeedit/employeeedit.component';
import { EmployeedeleteComponent } from './components/employeedelete/employeedelete.component';
import { EmployeefindComponent } from './components/employeefind/employeefind.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeaddComponent,
    EmployeelistComponent,
    EmployeeeditComponent,
    EmployeedeleteComponent,
    EmployeefindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
