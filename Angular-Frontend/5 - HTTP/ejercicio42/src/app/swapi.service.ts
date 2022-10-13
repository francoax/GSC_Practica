import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Swapi } from './entities/swapi';

@Injectable({
  providedIn: 'root'
})
export class SWAPIService {

  constructor(private http : HttpClient) { }

  makeRequest() : Observable<Swapi>{
    return this.http.get<Swapi>(`${environment.swapiurl}films/`);
  }

}
