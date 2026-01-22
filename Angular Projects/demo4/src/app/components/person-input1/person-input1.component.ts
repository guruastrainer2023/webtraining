import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-input1',
  templateUrl: './person-input1.component.html',
  styleUrl: './person-input1.component.css'
})
export class PersonInput1Component {
  personForm=new FormGroup({
    "pname":new FormControl('Keerthi'),
    "page":new FormControl('25')
  });

  add(p:any){
    console.log(p)
  }

}
