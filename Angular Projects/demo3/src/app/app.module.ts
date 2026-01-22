import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingexampleComponent } from './components/propertybindingexample/propertybindingexample.component';
import { StylebindingexampleComponent } from './components/stylebindingexample/stylebindingexample.component';
import { ClassbindingexampleComponent } from './components/classbindingexample/classbindingexample.component';
import { EventbindingexampleComponent } from './components/eventbindingexample/eventbindingexample.component';
import { TwowaybindingexampleComponent } from './components/twowaybindingexample/twowaybindingexample.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PropertybindingexampleComponent,
    StylebindingexampleComponent,
    ClassbindingexampleComponent,
    EventbindingexampleComponent,
    TwowaybindingexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
