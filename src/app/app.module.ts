import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Displayque } from './displayque.component/displayque.component.component';
import { DisplayqueComponent } from './displayque/displayque.component';

@NgModule({
  declarations: [
    AppComponent,
    Displayque.ComponentComponent,
    DisplayqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
