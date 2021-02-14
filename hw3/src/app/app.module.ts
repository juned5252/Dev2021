import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionsComponent,
    PropBindComponent,
    EventBindComponent,
    StyleBindComponent,
    ClassBindComponent,
    TwoWayBindComponent
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
