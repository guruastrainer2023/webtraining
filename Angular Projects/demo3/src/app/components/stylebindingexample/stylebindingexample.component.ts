import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebindingexample',
  templateUrl: './stylebindingexample.component.html',
  styleUrl: './stylebindingexample.component.css'
})
export class StylebindingexampleComponent {
  preferredBorderStyle="outset";
  preferredWidthPercentage:string="60%";
  preferredHeightInCms:string="4cm";
  qty:number=21;
  myStyles={
    border:"solid",
    margin:"2cm",
    padding:"2cm",
    backgroundColor:"grey"
  }

}
