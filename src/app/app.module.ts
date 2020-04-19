import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Filterpipe } from './filter';
import { BootstrapCardComponent } from './bootstrap-card/bootstrap-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Filterpipe,
    BootstrapCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
