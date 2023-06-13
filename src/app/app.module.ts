import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CurrencyConverterComponent} from "./currency/currencyconverter/сurrencyсonverterсomponent";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './currency/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
