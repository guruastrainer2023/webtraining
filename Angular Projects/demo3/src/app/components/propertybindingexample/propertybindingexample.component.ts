import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybindingexample',
  templateUrl: './propertybindingexample.component.html',
  styleUrl: './propertybindingexample.component.css'
})
export class PropertybindingexampleComponent {
  preferredAlignment:string="left";
  myName:string="Ashwin";
  ready:boolean=true;
  enableEditing:boolean=true;
  howmanyrows:number=15;
  howmanycols:number=80;
}
