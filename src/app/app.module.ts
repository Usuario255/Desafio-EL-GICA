import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { CardComponent } from './card/card.component';
import { GrigComponent } from './grig/grig.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    CardComponent,
    GrigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
