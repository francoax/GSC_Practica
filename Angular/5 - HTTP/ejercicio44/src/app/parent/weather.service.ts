import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from './entitie/forecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http : HttpClient ) { }

  getWeather(url : string ) : Observable<Forecast> {
    
    return this.http.get<Forecast>(url);

  }


}
