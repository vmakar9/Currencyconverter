import {Component} from '@angular/core';
import {ExchangeRatesResponse} from "../interfaces/exchangeratesresponse.interface";
import {CurrencyService} from "../currencyservice/currency.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  exchangeRates: ExchangeRatesResponse;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data: ExchangeRatesResponse) => {
      this.exchangeRates = data;
    });
  }
}
