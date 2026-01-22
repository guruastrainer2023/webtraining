import { Component } from '@angular/core';

@Component({
  selector: 'app-forloopexample2',
  templateUrl: './forloopexample2.component.html',
  styleUrl: './forloopexample2.component.css'
})
export class Forloopexample2Component {
  personList = [
    { id: 101, name: "Gokul", salary: 56000.00 },
    { id: 102, name: "Anitha", salary: 33000.00 },
    { id: 103, name: "Reshmi", salary: 46000.00 },
    { id: 104, name: "Dinesh", salary: 16000.00 },
    { id: 105, name: "Ram", salary: 22000.00 }
  ]
}
