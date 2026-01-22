import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeeinput1',
  templateUrl: './employeeinput1.component.html',
  styleUrl: './employeeinput1.component.css'
})
export class Employeeinput1Component {

  fb: FormBuilder = inject(FormBuilder);



  employeeForm = this.fb.group({
    id: [new FormControl(0).value, [Validators.required]],
    name: [new FormControl('Keerthi').value, [Validators.minLength(5), Validators.maxLength(20)]],
    gender: [new FormControl("FEMALE").value],
    department: [new FormControl('FINANCE').value],
    basicSalary: [new FormControl(0.0).value, [Validators.min(5000), Validators.max(50000)]],
    relocation: [new FormControl(true).value],
    dateOfJoin: [new FormControl(new Date()).value]
  });


  public get employeeData(): any {
    return this.employeeForm;
  }


  add(emp: any) {
    console.log(emp)
  }



}
