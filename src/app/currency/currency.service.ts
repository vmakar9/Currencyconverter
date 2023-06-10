import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExchangeRatesResponse} from "./exchangeratesresponse.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService{
  private apiUrl = 'https://open.er-api.com/v6/latest/UAH'
  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(this.apiUrl);
  }
}
