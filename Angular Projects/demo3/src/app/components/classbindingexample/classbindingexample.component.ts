import { Component } from '@angular/core';

@Component({
  selector: 'app-classbindingexample',
  templateUrl: './classbindingexample.component.html',
  styleUrl: './classbindingexample.component.css'
})
export class ClassbindingexampleComponent {
  successClass:string="text-success";
  stockLevel=10;

  passedExam=true;
  congrats=true;

  messageClasses={
    "text-success":this.passedExam,
    "text-danger":!this.passedExam,
    "text-special":this.congrats
  }

  mybuttonclasses={
    "btn":true,
    "btn-primary":true
  }
}
