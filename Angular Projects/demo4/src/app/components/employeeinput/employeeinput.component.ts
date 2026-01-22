import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeinput',
  templateUrl: './employeeinput.component.html',
  styleUrl: './employeeinput.component.css'
})
export class EmployeeinputComponent {
  id:number=0;
  name:string="Anitha";
  gender:string="FEMALE";
  dateOfJoin:Date=new Date();
  department:string="IT";
  basicSalary:number=0.0;
  relocation:boolean=true;

  add(){
    let employeeObject={
      "id":this.id,
      "name":this.name,
      "gender":this.gender,
      "dateOfJoin":this.dateOfJoin,
      "basicSalary":this.basicSalary,
      "relocation":this.relocation,
      "department":this.department
    }
    console.log(employeeObject);
  }

  
}
