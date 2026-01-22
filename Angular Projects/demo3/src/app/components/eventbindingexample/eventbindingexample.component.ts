import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbindingexample',
  templateUrl: './eventbindingexample.component.html',
  styleUrl: './eventbindingexample.component.css'
})
export class EventbindingexampleComponent {
  applyBorder=false;

  greet(){
    console.log("Welcome to Event Binding")
  }
  welcome(a:string){
    console.log(a)
  }
  f1(evt:any){
    console.log(evt);
  }

  f2(){
    this.applyBorder=true;
  }

  f3(){
    this.applyBorder=false;
  }

  showName(name:string){
    console.log(name);
  }
}