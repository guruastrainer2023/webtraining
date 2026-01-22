import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybindingexample',
  templateUrl: './twowaybindingexample.component.html',
  styleUrl: './twowaybindingexample.component.css'
})
export class TwowaybindingexampleComponent {
  myname:string="Dinesh";

  f1(name:string){
    this.myname=name;
    console.log(this.myname)
  }
}
