import { Component } from '@angular/core';

import {ExchangeRatesResponse} from "./exchangeratesresponse.interface";
import {CurrencyService} from "./currency.service";

interface ExchangeRates {
  [currency: string]: number;
}

@Component({
  selector: 'app-currency-converter',
  templateUrl: 'сurrencyconverter.component.html',
  styleUrls: ['currencyconverter.component.css']
})
export class CurrencyConverterComponent {
  exchangeRates: ExchangeRatesResponse;
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data: ExchangeRatesResponse) => {
      this.exchangeRates = data;
    });
  }

  convertCurrency() {

    if (this.fromAmount >= 0) {
      const fromRate = this.exchangeRates.rates[this.fromCurrency];
      const toRate = this.exchangeRates.rates[this.toCurrency];

      this.toAmount = (this.fromAmount / fromRate) * toRate;
    }else if (this.fromAmount < 0){
      alert('Введіть додатні числа');
    }

  }

  reverseConversion() {
    const tempCurrency = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = tempCurrency;

    this.convertCurrency();
  }

  getObjectKeys(obj: object): string[] {
    return Object.keys(obj);
  }
}
