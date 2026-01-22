import { Component } from '@angular/core';

@Component({
  selector: 'app-personinput',
  templateUrl: './personinput.component.html',
  styleUrl: './personinput.component.css'
})
export class PersoninputComponent {
  personName="Dinesh";
  personAge=20;

  f1(){
    console.log(this.personName)
    console.log(this.personAge)
  }
}
