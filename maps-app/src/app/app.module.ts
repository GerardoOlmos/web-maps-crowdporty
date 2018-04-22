import { AgmCoreModule } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCFmAGkjF8w4dLkKQ5qbyu_QD3QRm0S7aI",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    AgmDirectionModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
