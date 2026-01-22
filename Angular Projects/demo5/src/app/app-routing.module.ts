import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeaddComponent } from './components/employeeadd/employeeadd.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeeditComponent } from './components/employeeedit/employeeedit.component';
import { EmployeedeleteComponent } from './components/employeedelete/employeedelete.component';
import { EmployeefindComponent } from './components/employeefind/employeefind.component';

const routes: Routes = [
    {path:"add",component:EmployeeaddComponent},
    {path:"list",component:EmployeelistComponent},
    {path:"edit",component:EmployeeeditComponent},
    {path:"delete",component:EmployeedeleteComponent},
    {path:"find",component:EmployeefindComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
